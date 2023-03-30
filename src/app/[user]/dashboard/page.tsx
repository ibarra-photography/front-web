'use client';

import Dashboard from 'components/Dashboard';

interface IParams {
  params: { user: string };
}
export default function Page({ params }: IParams) {
  return (
    <div>
      <Dashboard user={params.user} />
    </div>
  );
}
