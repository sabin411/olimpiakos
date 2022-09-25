import { GET_USER_INFO } from '@/graphql/query.graphql';
import { UserInfo, UserInfoVariables } from '@/graphql/__generated__/UserInfo';
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
  const token = searchParameters.get('token');
  const userId = searchParameters.get('userId');
  const userName = searchParameters.get('username');
  const email = searchParameters.get('email');
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState<UserInfo | undefined>();

  useQuery<UserInfo, UserInfoVariables>(GET_USER_INFO, {
    variables: {
      filters: {
        users_permissions_user: {
          id: {
            eq: userId,
          },
        },
      },
    },
    onCompleted: data => {
      console.log(data);
      if (data.userInformations?.data[0].id) {
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

  console.log(userInfo);
  useEffect(() => {
    if (userInfo?.userInformations?.data[0]?.id) {
      cookies.set('token', token);
      cookies.set('userId', userId);
      cookies.set('userName', userName);
      cookies.set('email', email);
      cookies.set(
        'profilePic',
        userInfo?.userInformations?.data[0]?.attributes?.profilePic.data
          ?.attributes?.url,
      );
      cookies.set(
        'fullName',
        userInfo?.userInformations?.data[0]?.attributes?.fullName,
      );
      cookies.set(
        'phoneNumber',
        userInfo?.userInformations?.data[0]?.attributes?.phoneNumber,
      );
      cookies.set('userInfoId', userInfo?.userInformations?.data[0].id);
      navigate('/');
    }
  }, [userInfo]);
  return (
    <div>
      redirecting...
      <Link to={'/'} className='text-secondary-800 underline font-bold'>
        please refresh
      </Link>
    </div>
  );
}

export default Redirecting;
