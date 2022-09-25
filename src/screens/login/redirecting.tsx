import { GET_USER_INFO_BY_ID } from '@/graphql/query.graphql';
import { UserInfoVariables } from '@/graphql/__generated__/UserInfo';
import {
  UserInfoById,
  UserInfoByIdVariables,
} from '@/graphql/__generated__/UserInfoById';
import { showToast } from '@/utils/Toast/toast';
import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Redirecting() {
  const cookies = new Cookies();
  const [searchParameters] = useSearchParams();
  const userId = searchParameters.get('userId');
  const token = searchParameters.get('token');
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState<UserInfoById | undefined>();

  if (userId) {
    const { data: userInfoData } = useQuery<
      UserInfoById,
      UserInfoByIdVariables
    >(GET_USER_INFO_BY_ID, {
      variables: {
        userInformationId: userId,
      },
      onCompleted: data => {
        if (data.userInformation?.data?.id) {
          setUserInfo(data);
        }
      },
      onError: error => {
        showToast({
          title: 'Failed to get user information',
          subTitle: error?.message,
        });
      },
    });
  }
  useEffect(() => {
    if (userInfo?.userInformation?.data?.id) {
      cookies.set('token', token);
      cookies.set(
        'profilePic',
        userInfo?.userInformation?.data?.attributes?.profilePic.data?.attributes
          ?.url,
      );
      cookies.set('userId', userId);
      cookies.set(
        'fullName',
        userInfo?.userInformation?.data?.attributes?.fullName,
      );
      navigate('/');
    }
  }, [userInfo]);
  return (
    <div>
      redirecting...<Link to={'/'}>Plese refresh</Link>
    </div>
  );
}

export default Redirecting;
