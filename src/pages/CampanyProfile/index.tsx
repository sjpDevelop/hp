import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Top from "./Top";
import CompanyPolicy from "./CompanyPolicy";
import ManagementPolicy from "./ManagementPolicy";
import BusinessDescription from "./BusinessDescription";
import CompanyOverview from "./CompanyOverview";
import CompanyHistory from "./CompanyHistory";

function CompanyProfile() {
    return (
        <>
            <Header />
            <Top />
            <main>
                <CompanyPolicy />
                <ManagementPolicy />
                <BusinessDescription />
                <CompanyOverview />
                <CompanyHistory />
            </main>
            <Footer />
        </>
    );
}

export default CompanyProfile;
