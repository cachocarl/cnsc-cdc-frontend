import { useSessionStorageState } from "ahooks";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlainLayout from "../page/_base/PlainLayout";
import { NavigatorProvider } from "../../service/context/NavigatorContext";
import AdminLayout from "../page/_base/AdminLayout";
import HomePage from "../page/home/HomePage";
import InternalDocumentPage from "../page/transactions/internal-documents/InternalDocumentPage";
import ExternalDocumentPage from "../page/transactions/external-documents/ExternalDocumentPage";
import RequestDocumentInfoPage from "../page/transactions/request-document-info/RequestDocumentInfoPage";
import ApproveDocumentsPage from "../page/documents/approve-documents/ApproveDocumentsPage";
import ArchivePage from "../page/documents/archive/ArchivePage";
import AboutPage from "../page/about/AboutPage";
import CdcInternalDocumentsPage from "../page/cdc/internal-documents/CdcInternalDocumentsPage";
import CdcExternalDocumentsPage from "../page/cdc/external-documents/CdcExternalDocumentsPage";

//This will serve as the base router for all pages
const GlobalRoute = () => {
  const [selectedKey, setSelectedKey] = useSessionStorageState(
    "selected-menu",
    "home"
  );
  return (
    <NavigatorProvider
      value={{ selectedKey: selectedKey, setSelectedKey: setSelectedKey }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route path="home" element={<HomePage />} />

            <Route
              path="transactions/internal-documents"
              element={<InternalDocumentPage />}
            />

            <Route
              path="transactions/external-documents"
              element={<ExternalDocumentPage />}
            />

            <Route
              path="transactions/request-document-info"
              element={<RequestDocumentInfoPage />}
            />

            <Route
              path="/documents/approve-documents"
              element={<ApproveDocumentsPage />}
            />

            <Route
              path="/cdc/internal-documents"
              element={<CdcInternalDocumentsPage />}
            />

            <Route
              path="/cdc/external-documents"
              element={<CdcExternalDocumentsPage />}
            />

            <Route path="/about" element={<AboutPage />} />

            <Route path="documents/archive" element={<ArchivePage />} />
          </Route>
          <Route path="/login" element={<PlainLayout />} />
        </Routes>
      </BrowserRouter>
    </NavigatorProvider>
  );
};

export default GlobalRoute;
