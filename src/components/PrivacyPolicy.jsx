import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 bg-slate-300 p-5">Privacy Policy</h1>
      <span className='flex justify-between'>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Effective Date:</strong> 1/6/25
      </p>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Last Updated:</strong> 1/6/25
      </p>
      </span>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4"> Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details. Professional credentials (e.g., nursing license, certifications).</li>
          <li><strong>Case-Related Information:</strong> Patient medical records, case summaries, or related documentation provided for consulting purposes. Any information entered into the app’s forms or uploaded for analysis.</li>
          <li><strong>Technical Information:</strong> Device information (e.g., type, operating system), IP address and usage statistics, cookies, and similar tracking technologies (if applicable).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4"> How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          We use the collected information to:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Provide consulting services for medical malpractice cases.</li>
          <li>Analyze medical records to generate insights or recommendations.</li>
          <li>Communicate with you regarding your account or case status.</li>
          <li>Improve app functionality and user experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4"> How We Protect Your Information</h2>
        <p className="text-gray-600 mb-4">
          We implement appropriate technical and organizational measures to safeguard your information, including:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Data encryption (in transit and at rest).</li>
          <li>Secure storage of case-related information.</li>
          <li>Role-based access controls to restrict unauthorized access.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4"> Sharing Your Information</h2>
        <p className="text-gray-600 mb-4">
          We do not sell or rent your information to third parties. We may share your information only in the following cases:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>With your explicit consent.</li>
          <li>With legal or regulatory authorities, as required by law.</li>
          <li>With third-party service providers who assist us in operating the app (e.g., cloud storage providers), subject to strict confidentiality agreements.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4"> Your Rights</h2>
        <p className="text-gray-600 mb-4">
          Depending on your jurisdiction, you may have the following rights:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Access, correct, or delete your personal data.</li>
          <li>Withdraw consent for data processing.</li>
          <li>File a complaint with a regulatory authority.</li>
        </ul>
        <p className="text-gray-600 mt-4">
          To exercise these rights, contact us at <a href="mailto:intakemedview@gmail.com" className="text-blue-600">intakemedview@gmail.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4"> Data Retention</h2>
        <p className="text-gray-600 mb-4">
          We retain your data only as long as necessary to provide services or comply with legal obligations. Case-related data may be deleted upon your request or after a specific retention period, as per applicable law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4"> Compliance with HIPAA</h2>
        <p className="text-gray-600 mb-4">
          If you provide Protected Health Information (PHI), we comply with the Health Insurance Portability and Accountability Act (HIPAA) to ensure your data’s confidentiality, integrity, and security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4"> Changes to This Privacy Policy</h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted in the app, and you will be notified of significant updates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4"> Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Medview Services</strong>
        </p>
        <p className="text-gray-600 mb-4">
          Email: <a href="mailto:intakemedview@gmail.com" className="text-blue-600">intakemedview@gmail.com</a>
        </p>
        <p className="text-gray-600 mb-4">
          Phone: 406-334-4093
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
