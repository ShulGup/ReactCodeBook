import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProductDetail,
  ProductsList,
  Login,
  Register,
  CartPage,
  OrderPage,
  PageNotFound,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
