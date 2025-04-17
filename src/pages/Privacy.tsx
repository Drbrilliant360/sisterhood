
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-sisterhood-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead">
              Last Updated: April 17, 2025
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">1. Introduction</h2>
            <p>
              At SisterHood ("we," "our," or "us"), we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p>
              By accessing or using our platform, you consent to the practices described in this policy. 
              Please read this policy carefully to understand our practices regarding your personal data.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, location, and profile information that you provide when you register for an account.
              </li>
              <li>
                <strong>Usage Information:</strong> Information about how you use our platform, including your interactions with mentors, resources, and other features.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the device you use to access our platform, including device type, operating system, browser type, and IP address.
              </li>
              <li>
                <strong>Communication Information:</strong> Records of your communications with us and other users on the platform.
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To personalize your experience on our platform</li>
              <li>To connect you with appropriate mentors and resources</li>
              <li>To communicate with you about updates, promotions, and events</li>
              <li>To ensure the security and integrity of our platform</li>
              <li>To comply with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">4. Sharing Your Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf.
              </li>
              <li>
                <strong>With Other Users:</strong> When you interact with mentors or other users, certain information from your profile may be visible to them.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response to valid legal processes.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with your consent or at your direction.
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, 
              disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, 
              and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to the processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our platform 
              or by other means.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
              please contact us at:
            </p>
            <p className="mb-8">
              <strong>Email:</strong> privacy@sisterhoodapp.com<br />
              <strong>Address:</strong> 123 Women Empowerment Street, Lagos, Nigeria<br />
              <strong>Phone:</strong> +234 123 456 7890
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
