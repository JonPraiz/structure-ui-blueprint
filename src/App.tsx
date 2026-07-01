import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import LoginPage from './pages/auth/login';
import SignupPage from './pages/auth/signup';
import ForgotPasswordPage from './pages/auth/forgot-password';
import OrganizationSetupPage from './pages/auth/organization-setup';
import AppLayout from './pages/app/layout';
import DashboardPage from './pages/app/dashboard';
import MembersPage from './pages/app/members';
import TasksPage from './pages/app/tasks';
import EventsPage from './pages/app/events';
import DocumentsPage from './pages/app/documents';
import ReportsPage from './pages/app/reports';
import SettingsPage from './pages/app/settings';
import CalendarPage from './pages/app/calendar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/organization-setup" element={<OrganizationSetupPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/app" element={<AppLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="members" element={<MembersPage />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="documents" element={<DocumentsPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
