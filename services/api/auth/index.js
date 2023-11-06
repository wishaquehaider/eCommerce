import { toast } from "react-toastify";
import { apiCaller } from "../middleware/api-caller";
import { getCookie } from "utils/helpers/cookies";
import { setCookie } from "services/session/cookies";
import { encryptData } from 'utils/helpers/cookies';
import { REACT_APP_API_BASE_URL } from "utils/constants/constant";
import { ENDPOINTS, REQUEST_TYPES } from "services/api/middleware/url";
import { GetPermission, LoginAction } from "store/Actions/Auth";
import { errorMessages, successMessage } from "utils/helpers";
import { GetGMDSSCerificateAction, GetRejectionReasonAction } from "store/Actions/UserManagement";
import { ApiRequestedAction, ApiFulfilledAction, ApiRejectedAction } from "store/Actions/ApiCallStatus";

export const getGeneralAPI = async (method, url, ApiCallFor ) => {
  const myJson = await apiCaller({ method, url: `${REACT_APP_API_BASE_URL}${url}`});
   if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
          const { data } = myJson;
          return data;
  } else {
    const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
    toast.error(errorMessages(message));
  }
};

export const getUserPermission = (method, url) => {
  return async (dispatch) => {
    const myJson = await apiCaller({ method, url});
    if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
      const { data } = myJson;
      const permission = data.data.map((code) => code.code);
      setCookie('permission', JSON.stringify(permission));
      dispatch(GetPermission(permission));
      // return data;
    } else {
      const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
      toast.error(errorMessages(message));
    }
  }
};

export const getGMDSSCertificate = (method, url, apiCallFor) => {
  return async (dispatch) => {
    dispatch(ApiRequestedAction({ apiCallFor }));
    const myJson = await apiCaller({ method, url});
    if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
      const { data } = myJson;
      dispatch(GetGMDSSCerificateAction(data?.data));
      dispatch(ApiFulfilledAction({ apiCallFor: apiCallFor, message: '' }));
      // return data;
    } else {
      const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
      toast.error(errorMessages(message));
    }
  }
};

export const getRejectionReason = (method, url, apiCallFor) => {
  return async (dispatch) => {
    dispatch(ApiRequestedAction({ apiCallFor }));
    const myJson = await apiCaller({ method, url});
    if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
      const { data } = myJson;
      dispatch(GetRejectionReasonAction(data?.data[0]));
      dispatch(ApiFulfilledAction({ apiCallFor: apiCallFor, message: '' }));
      // return data;
    } else {
      const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
      toast.error(errorMessages(message));
    }
  }
};

export const logoutAPI = (method, url, apiCallFor) => {
  return async (dispatch) => {
    dispatch(ApiRequestedAction({ apiCallFor }));
    const myJson = await apiCaller({ method ,  url: `${REACT_APP_API_BASE_URL}${url}`});
    if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
      dispatch(ApiFulfilledAction({ apiCallFor: apiCallFor, message: "" }));
    } else {
      const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
      const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500;
      toast.error(errorMessages(message));
      dispatch(
        ApiRejectedAction({
          statusCode,
          apiCallFor: apiCallFor,
          message,
        })
      );
    }
  };
};

export const loginAPI = (method, url, data, apiCallFor, navigate) => {
  return async (dispatch) => {
    dispatch(ApiRequestedAction({ apiCallFor }));
    const myJson = await apiCaller({ method ,  url: `${REACT_APP_API_BASE_URL}${url}` , data });
    if (myJson && (myJson?.data?.userObj?.statusCode === 200) | (myJson?.data?.userObj?.statusCode === 201)) {
      dispatch(ApiFulfilledAction({ apiCallFor: apiCallFor, message: "" }));
      const { data } = myJson?.data?.userObj;
      const { headers } = myJson;
      let GMDSSUser = '';
      setCookie('accessToken', headers?.authorization);
      if((data.usertype === 7 || data.usertype === 8 || data.usertype === 9) && !data.companyLogo){
        setCookie('permission', JSON.stringify([]));
      } else{
        dispatch(getUserPermission(REQUEST_TYPES.GET, `${ENDPOINTS.GET_USER_PERMISSIONS}${data?.id}`));
      }
      if(data.usertype === 5) {
        const certificateResponse = await apiCaller( {method:REQUEST_TYPES.GET, url:`${ENDPOINTS.GET_CERTIFICATE}/${data?.cnic}`});
        setCookie('cnic', JSON.stringify(data?.cnic));
        setCookie('user', JSON.stringify(data));
        const result = await getGeneralAPI("GET", `/api/ug/groups/${data?.id}`, 'UserGroupCode');
        if(result){
        setCookie('userGroup', JSON.stringify(result?.data[0]));
        }
        if(certificateResponse?.data?.data.isSubmit === 'false' && !certificateResponse?.data?.data.fatherName) {
          return  navigate('/GMDSS-profile')
        }else {
          return  navigate('/GMDSS-certificate')
        }
        
        ////GMDSS-profile
       // const resp = await getGeneralAPI("GET", `/api/gmdss-user/${data?.id}`, 'GMDSSUser');
       //   if (resp)  {
       //     GMDSSUser = resp?.data[0];
       //     setCookie('user', JSON.stringify(data));
       //     if(resp?.data?.data?.length){
       //      setCookie('GMDSUser', JSON.stringify(resp?.data[0]));
       //     }
       //     const result = await getGeneralAPI("GET", `/api/ug/groups/${data?.id}`, 'UserGroupCode');
       //     if(result){
       //      setCookie('userGroup', JSON.stringify(result?.data[0]));
       //      if(GMDSSUser?.first_name) navigate('/dashboard');
       //     }
       //   }
      } else {
        setCookie('user', JSON.stringify(data));
        const result = await getGeneralAPI("GET", `/api/ug/groups/${data?.id}`, 'UserGroupCode');
           if(result){
            setCookie('userGroup', JSON.stringify(result?.data[0]));
           }
      }
      dispatch(LoginAction(data));
      // if (data.usertype === 1) navigate('/employee-registration');
      if (data.usertype === 2) navigate('/user-registration');
      // else if (data.usertype === 5) navigate('/GMDSS-registration');
      else if (data.usertype === 3 && !data.companyId) {
         navigate('/company-registration');
        }
        else if ((data.usertype === 7 || data.usertype === 8 || data.usertype === 9)  && !data.companyLogo) {
          const Url = data?.companyId ? `/other-company?id=${encryptData(data?.companyId)}` : "/other-company";
           navigate(Url);
        }
       else {
        navigate('/dashboard');
      }
    
    } else {
      const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
      const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500;
      toast.error(errorMessages(message));
      dispatch(
        ApiRejectedAction({
          statusCode,
          apiCallFor: apiCallFor,
          message,
        })
      );
    }
  };
};

export const SetPasswordAPI = ( method, url, data, apiCallFor, navigate, redirectLink, message ) => {
  return async (dispatch) => {
    dispatch(ApiRequestedAction({ apiCallFor }))
    const myJson = await apiCaller({ method, url:`${REACT_APP_API_BASE_URL}${url}`, data });
    if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
      dispatch(ApiFulfilledAction({ apiCallFor: apiCallFor, message: '' }));
      successMessage(message)
      return navigate(redirectLink)
    } else {
      const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
      const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500
      toast.error(errorMessages(message));
      dispatch(ApiRejectedAction({ statusCode, apiCallFor: apiCallFor, message }));
    }
  }
}

export const ForgetPasswordAPI = ( method, url, data, apiCallFor, navigate, redirectLink, message ) => {
  return async (dispatch) => {
    dispatch(ApiRequestedAction({ apiCallFor }))
    const myJson = await apiCaller({ method, url:`${REACT_APP_API_BASE_URL}${url}`, data });
    if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
      dispatch(ApiFulfilledAction({ apiCallFor: apiCallFor, message: '' }));
      successMessage(message)
      return navigate(redirectLink)
    } else {
      const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
      const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500
      toast.error(errorMessages(message));
      dispatch(ApiRejectedAction({ statusCode, apiCallFor: apiCallFor, message }));
    }
  }
}

export const UpdateUserProfileAPI = ( method, url, data, apiCallFor, navigate, redirectLink, message ) => {
  return async (dispatch) => {
    dispatch(ApiRequestedAction({ apiCallFor }))
    const myJson = await apiCaller({  method, url, data });
    
    if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) { 
      dispatch(ApiFulfilledAction({ apiCallFor: apiCallFor, message: '' }));
      const user = getCookie("user");
      const { id } = JSON.parse(user ? user : "{}");
      const resp = await getGeneralAPI("GET", `/api/user/${id}`);
      const data  = resp.data[0];
      dispatch(LoginAction(data));
      setCookie('user', JSON.stringify(data));
      successMessage(message)
      return navigate(redirectLink)
    } else {
      const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
      const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500
      toast.error(errorMessages(message));
      dispatch(ApiRejectedAction({ statusCode, apiCallFor: apiCallFor, message }));
    }
  }
}

export const RegisterAPI = async (method, url, data, apiCallFor, navigate) => {
  const myJson = await apiCaller({ method, url: `${REACT_APP_API_BASE_URL}/${url}`, data});
  if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
    toast.success("Registered successfully.");
    return navigate(`/login`);
 } else {
   const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
   toast.error(errorMessages(message));
 }
};

export const rtoVerification = async (method, url, data) => {
  const myJson = await apiCaller({ method, url: `${REACT_APP_API_BASE_URL}/${url}`, data});
  if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
    return myJson?.data?.data;
  } else {
    const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
    toast.error(errorMessages(message));
  }
};

export const RegisterGMDSSUserAPI = async (method, url, data, apiCallFor, navigate) => {
  const myJson = await apiCaller({ method, url: `${REACT_APP_API_BASE_URL}/${url}`, data});
  if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
    toast.success("Registered successfully.");
    return navigate(`/login`);
  } else {
    const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
    toast.error(errorMessages(message));
  }
};
export const VerifyAccountAPI = async (method, url, data) => {
  const myJson = await apiCaller({ method, url, data});
  return myJson;
};

// export const getPermissionAPI = (method, url, apiCallFor, menuType) => {
//   return async (dispatch) => {
//     dispatch(ApiRequestedAction({ apiCallFor }));
//     const myJson = await apiCaller({ method , url });
//     if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
//       const menu = menuType ==='en' ? myJson?.data?.menu :myJson?.data?.menu_ar;
//       setCookie("permission", JSON.stringify(menu));
//       dispatch(getPermissionAction(menu));
//       dispatch(
//         ApiFulfilledAction({
//           apiCallFor: apiCallFor,
//           message: "",
//         })
//       );
//     } else {
//       const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
//       const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500;
//       Swal.fire("Error", errorMessages(message), "error");
//       dispatch(
//         ApiRejectedAction({
//           statusCode,
//           apiCallFor: apiCallFor,
//           message,
//         })
//       );
//     }
//   };
// };
// export const getProfileByUserId = (method, url, apiCallFor) => {
//   return async (dispatch) => {
//     dispatch(ApiRequestedAction({ apiCallFor }));
//     const myJson = await apiCaller({ method , url });
//     if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
//       const { data }=myJson?.data;
//       setCookie("profile", JSON.stringify(data));
//       dispatch(getProfileAction(data));
//       dispatch(
//         ApiFulfilledAction({
//           apiCallFor: apiCallFor,
//           message: "",
//         })
//       );
//     } else {
//       const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
//       const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500;
//       Swal.fire("Error", errorMessages(message), "error");
//       dispatch(
//         ApiRejectedAction({
//           statusCode,
//           apiCallFor: apiCallFor,
//           message,
//         })
//       );
//     }
//   };
// };
// export const logoutAPI = (method, url, navigate) => {
//   return async (dispatch) => {
//     const myJson = await apiCaller({ method , url });
//     if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
//       dispatch(setLangAction('en'))
//       logOut();
//       return navigate("/login");
//     } else {
//       const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
//       Swal.fire("Error", errorMessages(message), "error");
//     }
//   };
// };

// export const getStatEndPoints = (method, url, apiCallFor) => {
//   return async (dispatch) => {
//     dispatch(ApiRequestedAction({ apiCallFor }));
//     const myJson = await apiCaller({ method , url });
//     if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
//       const { stats }= myJson.data;
//       const statsEndPoint = [];
//       if(stats?.length){
//         stats.map(obj=> {
//           return statsEndPoint.push({endPoint:obj.countUrl,title:obj.title});
//         })
//       }
//       dispatch(getStatEndPointsAction({stats, statsEndPoint}));
//       dispatch(
//         ApiFulfilledAction({
//           apiCallFor: apiCallFor,
//           message: "",
//         })
//       );
//     } else {
//       const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
//       const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500;
//       Swal.fire("Error", errorMessages(message), "error");
//       dispatch(
//         ApiRejectedAction({
//           statusCode,
//           apiCallFor: apiCallFor,
//           message,
//         })
//       );
//     }
//   };
// };
// export const getStats = (method, url, apiCallFor, statsFor) => {
//   return async (dispatch) => {
//     dispatch(ApiRequestedAction({ apiCallFor }));
//     const myJson = await apiCaller({ method , url });
//     if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
//       const {data} = myJson.data;
//      const payload={statsFor , ...data}
//       dispatch(getStatAction(payload));
//       dispatch(
//         ApiFulfilledAction({
//           apiCallFor: apiCallFor,
//           message: "",
//         })
//       );
//     } else {
//       const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
//       const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500;
//       Swal.fire("Error", errorMessages(message), "error");
//       dispatch(
//         ApiRejectedAction({
//           statusCode,
//           apiCallFor: apiCallFor,
//           message,
//         })
//       );
//     }
//   };
// };
// export const getPendingProfileData = (method, url, apiCallFor, profileProperty) => {
//   return async (dispatch) => {
//     dispatch(ApiRequestedAction({ apiCallFor }));
//     const myJson = await apiCaller({ method , url });
//     if (myJson && (myJson?.data?.statusCode === 200) | (myJson?.data?.statusCode === 201)) {
//       const { data } = myJson?.data;
//       const profile = JSON.parse(getCookie('profile'));
//       if( profileProperty === 'network'){
//         profile['network'] =data?.network;
//       } else if( profileProperty === 'branch') {
//         profile['branch'] =data?._id
//       }
//       setCookie("profile", JSON.stringify(profile));
//       dispatch(getProfileAction(profile));
//       dispatch(
//         ApiFulfilledAction({
//           apiCallFor: apiCallFor,
//           message: "",
//         })
//       );
//     } else {
//       const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
//       const statusCode = (myJson?.response?.data?.message || myJson?.data?.message) ?? 500;
//       Swal.fire("Error", errorMessages(message), "error");
//       dispatch(
//         ApiRejectedAction({
//           statusCode,
//           apiCallFor: apiCallFor,
//           message,
//         })
//       );
//     }
//   };
// };