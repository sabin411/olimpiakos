import { GET_USER_INFO_BY_ID } from '@/graphql/query.graphql';
import { UserInfoVariables } from '@/graphql/__generated__/UserInfo';
import {
  UserInfoById,
  UserInfoByIdVariables,
} from '@/graphql/__generated__/UserInfoById';
import { useQuery } from '@apollo/client';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Redirecting() {
  const cookies = new Cookies();
  const [searchParameters] = useSearchParams();
  const userId = searchParameters.get('userId');
  const token = searchParameters.get('token');
  const navigate = useNavigate();

  if (userId) {
    useQuery<UserInfoById, UserInfoByIdVariables>(GET_USER_INFO_BY_ID, {
      variables: {
        userInformationId: userId,
      },
      onCompleted: data => {
        if (data.userInformation?.data?.id) {
          cookies.set('token', token);
          cookies.set(
            'profilePic',
            data.userInformation?.data?.attributes?.profilePic.data?.attributes
              ?.url,
          );
          cookies.set('userId', userId);
          cookies.set(
            'fullName',
            data.userInformation.data.attributes?.fullName,
          );
          navigate('/');
        }
      },
    });
  }
  return <div>redirecting...</div>;
}

export default Redirecting;
