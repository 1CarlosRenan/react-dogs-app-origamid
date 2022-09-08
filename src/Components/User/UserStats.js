import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GETS } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import UserStatsGraphs from './UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useFetch(() => {
    async function getData() {
      const { url, options } = STATS_GETS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data) {
    return (
      <div>
        <Head title="Estatísticas" />; Estatística
        <UserStatsGraphs data={data} />
      </div>
    );
  } else return null;
};

export default UserStats;
