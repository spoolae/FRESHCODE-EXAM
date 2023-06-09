import CONSTANTS from '../constants/constants';
import ContestCreationPage from '../pages/ContestCreation/ContestCreationPage';
import Home from '../pages/Home/Home';
import Payment from '../pages/Payment/Payment';
import StartContestPage from '../pages/StartContestPage/StartContestPage';
import LoginPage from './../pages/LoginPage/LoginPage';
import RegistrationPage from './../pages/RegistrationPage/RegistrationPage';
import Dashboard from './../pages/Dashboard/Dashboard';
import ContestPage from './../pages/ContestPage/ContestPage';
import UserProfile from '../pages/UserProfile/UserProfile';
import OnlyNotAuthorizedUserHoc from '../HOCs/OnlyNotAuthorizedUserHoc';
import PrivateHoc from '../HOCs/PrivateHoc';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: OnlyNotAuthorizedUserHoc(LoginPage),
    exact: true,
  },
  {
    path: '/registration',
    component: OnlyNotAuthorizedUserHoc(RegistrationPage),
    exact: true,
  },
  {
    path: '/payment',
    component: PrivateHoc(Payment),
    exact: true,
  },
  {
    path: '/startContest',
    component: PrivateHoc(StartContestPage),
    exact: true,
  },
  {
    path: '/startContest/nameContest',
    component: PrivateHoc(ContestCreationPage, {
      contestType: CONSTANTS.NAME_CONTEST,
      title: 'Company Name',
    }),
    exact: true,
  },
  {
    path: '/startContest/taglineContest',
    component: PrivateHoc(ContestCreationPage, {
      contestType: CONSTANTS.TAGLINE_CONTEST,
      title: 'TAGLINE',
    }),
    exact: true,
  },
  {
    path: '/startContest/logoContest',
    component: PrivateHoc(ContestCreationPage, {
      contestType: CONSTANTS.LOGO_CONTEST,
      title: 'LOGO',
    }),
    exact: true,
  },
  {
    path: '/dashboard',
    component: PrivateHoc(Dashboard),
    exact: true,
  },
  {
    path: '/contest/:id',
    component: PrivateHoc(ContestPage),
  },
  {
    path: '/account',
    component: PrivateHoc(UserProfile),
    exact: true,
  },
];

export default routes;
