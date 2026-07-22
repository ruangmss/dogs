import React from 'react';
import useHead from '../../hooks/useHead';
import './UserStats.css';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading/Loading';
import Error from '../Form/Error/Error';
import { STATS_GET } from '../../api/api';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs/UserStatsGraphs'));

const UserStats = () => {
  useHead('Estatísticas | Dogs', 'Confira as estatísticas das suas publicações no Dogs.');

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem('token');

      if (!token) {
        return;
      }

      const { url, options } = STATS_GET(token);

      await request(url, options);
    }

    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (data) {
    return (
      <React.Suspense fallback={<Loading />} className="user-stats">
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  }

  return null;
};

export default UserStats;
