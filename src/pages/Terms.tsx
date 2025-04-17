
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-sisterhood-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead">
              Last Updated: April 17, 2025
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the SisterHood platform ("Service"), you agree to be bound by these Terms of Service 
              ("Terms"). If you do not agree to these Terms, please do not use our Service.
            </p>
            <p>
              SisterHood provides a platform for women to connect with mentors, access resources, and join a 
              supportive community focused on entrepreneurship, health, and safety.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">2. User Accounts</h2>
            <p>
              To use certain features of our Service, you must register for an account. You agree to provide accurate, 
              current, and complete information during the registration process and to update such information to keep it 
              accurate, current, and complete.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities 
              that occur under your account. You agree to immediately notify us of any unauthorized use of your account or 
              any other breach of security.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">3. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Use our Service for any illegal purpose or in violation of any local, state, national, or international law
              </li>
              <li>
                Harass, abuse, or harm another person, or engage in any behavior that is harmful, threatening, or offensive
              </li>
              <li>
                Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity
              </li>
              <li>
                Interfere with or disrupt the Service or servers or networks connected to the Service
              </li>
              <li>
                Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the Service or any systems or networks connected to the Service
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">4. Content</h2>
            <p>
              Our Service allows you to post, link, store, share, and otherwise make available certain information, text, 
              graphics, videos, or other material ("Content").
            </p>
            <p>
              You retain all rights to any Content you submit, post, or display on or through our Service. By posting Content, 
              you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, 
              distribute, and display such Content in connection with providing the Service.
            </p>
            <p>
              You are solely responsible for the Content you post on our Service. You represent and warrant that you have all 
              necessary rights to post such Content and that the Content does not violate any rights of any third party.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">5. Mentorship</h2>
            <p>
              Our Service facilitates connections between mentors and mentees. We do not guarantee the accuracy, completeness, 
              or usefulness of any advice or information provided by mentors, and we are not responsible for any actions or 
              decisions taken based on such advice or information.
            </p>
            <p>
              Mentorship relationships are voluntary, and either party may terminate the relationship at any time. We reserve 
              the right to terminate or suspend any mentor's participation in our Service at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of 
              SisterHood and its licensors. The Service is protected by copyright, trademark, and other laws of both the Nigeria 
              and foreign countries.
            </p>
            <p>
              Our name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of 
              SisterHood or its affiliates or licensors. You may not use such marks without our prior written permission.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, SisterHood and its affiliates, directors, employees, agents, and licensors 
              shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but 
              not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use 
              of or inability to access or use the Service.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, 
              you may simply discontinue using the Service or contact us to request account deletion.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these 
              Terms periodically for changes. Your continued use of the Service following the posting of any changes to these 
              Terms constitutes acceptance of those changes.
            </p>
            
            <h2 className="text-2xl font-semibold text-sisterhood-darkpurple mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-8">
              <strong>Email:</strong> legal@sisterhoodapp.com<br />
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

export default Terms;
