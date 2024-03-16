import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
