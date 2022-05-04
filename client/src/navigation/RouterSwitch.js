import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Ball } from '../Ball';
import { ProtectedRoute } from './ProtectedRoute';

const CalendarPage = lazy(() => import('../calendar/CalendarPage').then(m => ({ default: m.CalendarPage })));
const GeneralSettingsPage = lazy(() => import('../admin/GeneralSettingsPage').then(m => ({ default: m.GeneralSettingsPage })));
const InfoPage = lazy(() => import('../other/InfoPage').then(m => ({ default: m.InfoPage })));
const LegalPrivacyPage = lazy(() => import('../other/LegalPrivacyPage').then(m => ({ default: m.LegalPrivacyPage })));
const LoginPage = lazy(() => import('../user/LoginPage').then(m => ({ default: m.LoginPage })));
const LogoutPage = lazy(() => import('../user/LogoutPage').then(m => ({ default: m.LogoutPage })));
const VerifyMailPage = lazy(() => import('../user/VerifyMailPage').then(m => ({ default: m.VerifyMailPage })));
const MyAccountPage = lazy(() => import('../user/MyAccountPage').then(m => ({ default: m.MyAccountPage })));
const MyReservationsPage = lazy(() => import('../calendar/MyReservationsPage').then(m => ({ default: m.MyReservationsPage })));
const RegisterPage = lazy(() => import('../user/RegisterPage').then(m => ({ default: m.RegisterPage })));
const StatsPage = lazy(() => import('../admin/StatsPage').then(m => ({ default: m.StatsPage })));
const EditTemplatesPage = lazy(() => import('../admin/EditTemplatesPage').then(m => ({ default: m.EditTemplatesPage })));
const UserManagementPage = lazy(() => import('../admin/UserManagementPage').then(m => ({ default: m.UserManagementPage })));

export function RouterSwitch() {

    return (
        <Suspense fallback={<Ball visible large centered spin />}>
            <Switch>

                <Route exact path="/">
                    <CalendarPage />
                </Route>

                <Route exact path="/info">
                    <InfoPage />
                </Route>

                <Route exact path="/legalnotice-privacy">
                    <LegalPrivacyPage />
                </Route>

                <Route exact path="/logout">
                    <LogoutPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/register">
                    <RegisterPage />
                </Route>

                <ProtectedRoute admin exact path="/admin/general">
                    <GeneralSettingsPage />
                </ProtectedRoute>

                <ProtectedRoute admin exact path="/admin/stats">
                    <StatsPage />
                </ProtectedRoute>

                <ProtectedRoute admin exact path="/admin/users">
                    <UserManagementPage />
                </ProtectedRoute>

                <ProtectedRoute admin exact path="/admin/templates">
                    <EditTemplatesPage />
                </ProtectedRoute>

                <ProtectedRoute exact path="/my-reservations">
                    <MyReservationsPage />
                </ProtectedRoute>

                <ProtectedRoute exact path="/profile">
                    <MyAccountPage />
                </ProtectedRoute>

                <ProtectedRoute path="/verify-mail/:verifyToken">
                    <VerifyMailPage />
                </ProtectedRoute>

                <Route path="*">
                    <Redirect to="/" />
                </Route>

            </Switch>
        </Suspense>
    );
}