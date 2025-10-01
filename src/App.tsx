import React, { useState } from 'react';
import { StudentDashboard } from './components/StudentDashboard';
import { FacultyDashboard } from './components/FacultyDashboard';
import { IndustryDashboard } from './components/IndustryDashboard';
import { RoleSelector } from './components/RoleSelector';

type UserRole = 'student' | 'faculty' | 'industry' | null;

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>(null);

  const handleRoleSelect = (role: UserRole) => {
    setCurrentRole(role);
  };

  const handleLogout = () => {
    setCurrentRole(null);
  };

  if (!currentRole) {
    return <RoleSelector onRoleSelect={handleRoleSelect} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {currentRole === 'student' && <StudentDashboard onLogout={handleLogout} />}
      {currentRole === 'faculty' && <FacultyDashboard onLogout={handleLogout} />}
      {currentRole === 'industry' && <IndustryDashboard onLogout={handleLogout} />}
    </div>
  );
}