export default function TimelinePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Development Timeline and Resources</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Development Phases</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-6">
            The project will be implemented in six distinct phases, with each phase building upon the previous one to deliver incremental value.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Phase 1: Foundation and Infrastructure Setup (2 weeks)</h3>
            <div className="border-l-4 border-purple-500 pl-4 mb-4">
              <p className="italic text-gray-600">Establish development environments, set up CI/CD pipelines, configure infrastructure, and implement core architecture components.</p>
            </div>
            <h4 className="font-semibold mb-1">Key Deliverables:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Development, testing, and staging environments</li>
              <li>CI/CD pipelines for automated testing and deployment</li>
              <li>Infrastructure as code (IaC) templates</li>
              <li>Core architecture components and libraries</li>
            </ul>
            <h4 className="font-semibold mb-1">Tasks:</h4>
            <ol className="list-decimal pl-6">
              <li>Set up development environments</li>
              <li>Configure CI/CD pipelines</li>
              <li>Implement infrastructure as code</li>
              <li>Develop core architecture components</li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Phase 2: Smart Contract Development (4 weeks)</h3>
            <div className="border-l-4 border-purple-500 pl-4 mb-4">
              <p className="italic text-gray-600">Develop and test all required smart contracts, implement security measures, and prepare for auditing.</p>
            </div>
            <h4 className="font-semibold mb-1">Key Deliverables:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Token Creation Contract</li>
              <li>Launchpad Management Contract</li>
              <li>Liquidity Pool Contract</li>
              <li>Trading Interface Contract</li>
              <li>Smart Wallet Contract</li>
              <li>Staking and Rewards Contract</li>
            </ul>
            <h4 className="font-semibold mb-1">Tasks:</h4>
            <ol className="list-decimal pl-6">
              <li>Develop Token Creation Contract</li>
              <li>Develop Launchpad Management Contract </li>
              <li>Develop Liquidity Pool Contract </li>
              <li>Develop Trading Interface Contract </li>
              <li>Develop Smart Wallet Contract </li>
              <li>Develop Staking and Rewards Contract</li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Phase 3: Backend Services Development (4 weeks)</h3>
            <div className="border-l-4 border-purple-500 pl-4 mb-4">
              <p className="italic text-gray-600">Implement all required backend services, integrate with smart contracts, and develop API endpoints.</p>
            </div>
            <h4 className="font-semibold mb-1">Key Deliverables:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>User Service</li>
              <li>Token Service</li>
              <li>Launchpad Service</li>
              <li>Liquidity Service</li>
              <li>Trading Service</li>
              <li>Wallet Service</li>
              <li>Blockchain Interaction Services</li>
            </ul>
            <h4 className="font-semibold mb-1">Tasks:</h4>
            <ol className="list-decimal pl-6">
              <li>Develop User Service </li>
              <li>Develop Token Service </li>
              <li>Develop Launchpad Service </li>
              <li>Develop Liquidity Service </li>
              <li>Develop Trading Service </li>
              <li>Develop Wallet Service </li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Phase 4: Frontend Development (4 weeks)</h3>
            <div className="border-l-4 border-purple-500 pl-4 mb-4">
              <p className="italic text-gray-600">Implement web application, integrate with backend services, and develop user interface components.</p>
            </div>
            <h4 className="font-semibold mb-1">Key Deliverables:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>User Dashboard</li>
              <li>Token Creation Interface</li>
              <li>Launchpad Management Interface</li>
              <li>Liquidity Management Interface</li>
              <li>Trading Interface</li>
              <li>Wallet Interface</li>
            </ul>
            <h4 className="font-semibold mb-1">Tasks:</h4>
            <ol className="list-decimal pl-6">
              <li>Develop User Dashboard </li>
              <li>Develop Token Creation Interface </li>
              <li>Develop Launchpad Management Interface </li>
              <li>Develop Liquidity Management Interface </li>
              <li>Develop Trading Interface </li>
              <li>Develop Wallet Interface </li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Phase 5: Integration and Testing (2 weeks)</h3>
            <div className="border-l-4 border-purple-500 pl-4 mb-4">
              <p className="italic text-gray-600">Integrate all components, perform comprehensive testing, and address issues and optimize performance.</p>
            </div>
            <h4 className="font-semibold mb-1">Key Deliverables:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Integrated application</li>
              <li>Test reports</li>
              <li>Performance optimization recommendations</li>
            </ul>
            <h4 className="font-semibold mb-1">Tasks:</h4>
            <ol className="list-decimal pl-6">
              <li>Integrate frontend with backend </li>
              <li>Integrate backend with smart contracts </li>
              <li>Perform comprehensive testing </li>
              <li>Address issues and optimize performance </li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Phase 6: Deployment and Launch (2 weeks)</h3>
            <div className="border-l-4 border-purple-500 pl-4 mb-4">
              <p className="italic text-gray-600">Deploy to production environment, perform final testing, and launch the platform.</p>
            </div>
            <h4 className="font-semibold mb-1">Key Deliverables:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Production deployment</li>
              <li>Launch documentation</li>
              <li>Monitoring and support setup</li>
            </ul>
            <h4 className="font-semibold mb-1">Tasks:</h4>
            <ol className="list-decimal pl-6">
              <li>Deploy to production environment </li>
              <li>Perform final testing </li>
              <li>Prepare launch documentation </li>
              <li>Set up monitoring and support </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Timeline Summary</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phase</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Cumulative</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">1. Foundation and Infrastructure Setup</td>
                  <td className="py-2 px-4 border-b border-gray-200">2 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">2 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">2. Smart Contract Development</td>
                  <td className="py-2 px-4 border-b border-gray-200">4 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">4 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">3. Backend Services Development</td>
                  <td className="py-2 px-4 border-b border-gray-200">4 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">4 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">4. Frontend Development</td>
                  <td className="py-2 px-4 border-b border-gray-200">4 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">4 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">5. Integration and Testing</td>
                  <td className="py-2 px-4 border-b border-gray-200">2 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">3 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">6. Deployment and Launch</td>
                  <td className="py-2 px-4 border-b border-gray-200">1 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">2 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Total Development Time:</strong> 13 weeks (approximately 3 months)
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Note: Some phases can be partially overlapped with proper planning, potentially reducing the total timeline by 4-6 weeks.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Required Expertise</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Blockchain Development Team</h3>
              <div className="mb-3">
                <h4 className="font-semibold">Solana Smart Contract Developer (2)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> Rust, Solana Program Library, Anchor Framework, cryptography</li>
                  <li><strong>Experience:</strong> 3+ years in blockchain development, 1+ years with Solana</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Blockchain Integration Specialist (1)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> Solana Web3.js, transaction building, RPC interaction</li>
                  <li><strong>Experience:</strong> 2+ years in blockchain integration</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Backend Development Team</h3>
              <div className="mb-3">
                <h4 className="font-semibold">Backend Lead Developer (1)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> Node.js, TypeScript, API design, system architecture</li>
                  <li><strong>Experience:</strong> 5+ years in backend development, 2+ years with TypeScript</li>
                </ul>
              </div>
              <div className="mb-3">
                <h4 className="font-semibold">Backend Developers (2)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> Node.js, TypeScript, Express/NestJS, PostgreSQL, Redis</li>
                  <li><strong>Experience:</strong> 3+ years in backend development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">DevOps Engineer (1)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> Docker, Kubernetes, Terraform, CI/CD pipelines</li>
                  <li><strong>Experience:</strong> 3+ years in DevOps</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Frontend Development Team</h3>
              <div className="mb-3">
                <h4 className="font-semibold">Frontend Lead Developer (1)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> React, Next.js, TypeScript, state management</li>
                  <li><strong>Experience:</strong> 5+ years in frontend development, 2+ years with React</li>
                </ul>
              </div>
              <div className="mb-3">
                <h4 className="font-semibold">Frontend Developers (2)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
                  <li><strong>Experience:</strong> 3+ years in frontend development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">UI/UX Designer (1)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> UI design, UX research, prototyping</li>
                  <li><strong>Experience:</strong> 3+ years in UI/UX design</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Quality Assurance Team</h3>
              <div className="mb-3">
                <h4 className="font-semibold">QA Lead (1)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> Test planning, automation testing, quality processes</li>
                  <li><strong>Experience:</strong> 5+ years in QA</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">QA Engineers (2)</h4>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Skills:</strong> Manual testing, automation testing, performance testing</li>
                  <li><strong>Experience:</strong> 3+ years in QA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Cost Estimation</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Personnel Costs</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Count</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Monthly Rate (USD)</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration (months)</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Solana Smart Contract Developer</td>
                    <td className="py-2 px-4 border-b border-gray-200">2</td>
                    <td className="py-2 px-4 border-b border-gray-200">$15,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$210,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Blockchain Integration Specialist</td>
                    <td className="py-2 px-4 border-b border-gray-200">1</td>
                    <td className="py-2 px-4 border-b border-gray-200">$12,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$84,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Backend Lead Developer</td>
                    <td className="py-2 px-4 border-b border-gray-200">1</td>
                    <td className="py-2 px-4 border-b border-gray-200">$14,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$98,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Backend Developers</td>
                    <td className="py-2 px-4 border-b border-gray-200">2</td>
                    <td className="py-2 px-4 border-b border-gray-200">$10,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$140,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">DevOps Engineer</td>
                    <td className="py-2 px-4 border-b border-gray-200">1</td>
                    <td className="py-2 px-4 border-b border-gray-200">$12,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$84,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Frontend Lead Developer</td>
                    <td className="py-2 px-4 border-b border-gray-200">1</td>
                    <td className="py-2 px-4 border-b border-gray-200">$14,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$98,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Frontend Developers</td>
                    <td className="py-2 px-4 border-b border-gray-200">2</td>
                    <td className="py-2 px-4 border-b border-gray-200">$10,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$140,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">UI/UX Designer</td>
                    <td className="py-2 px-4 border-b border-gray-200">1</td>
                    <td className="py-2 px-4 border-b border-gray-200">$9,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">5</td>
                    <td className="py-2 px-4 border-b border-gray-200">$45,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">QA Lead</td>
                    <td className="py-2 px-4 border-b border-gray-200">1</td>
                    <td className="py-2 px-4 border-b border-gray-200">$12,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$84,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">QA Engineers</td>
                    <td className="py-2 px-4 border-b border-gray-200">2</td>
                    <td className="py-2 px-4 border-b border-gray-200">$8,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$112,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Project Manager</td>
                    <td className="py-2 px-4 border-b border-gray-200">1</td>
                    <td className="py-2 px-4 border-b border-gray-200">$15,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$105,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Product Owner</td>
                    <td className="py-2 px-4 border-b border-gray-200">1</td>
                    <td className="py-2 px-4 border-b border-gray-200">$13,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$91,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200 font-semibold">Total Personnel Costs</td>
                    <td className="py-2 px-4 border-b border-gray-200"></td>
                    <td className="py-2 px-4 border-b border-gray-200"></td>
                    <td className="py-2 px-4 border-b border-gray-200"></td>
                    <td className="py-2 px-4 border-b border-gray-200 font-semibold">$1,291,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Infrastructure and Operational Costs</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Item</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Monthly Cost (USD)</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration (months)</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Development Environment</td>
                    <td className="py-2 px-4 border-b border-gray-200">$2,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$14,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Staging Environment</td>
                    <td className="py-2 px-4 border-b border-gray-200">$3,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$21,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Production Environment</td>
                    <td className="py-2 px-4 border-b border-gray-200">$5,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">3</td>
                    <td className="py-2 px-4 border-b border-gray-200">$15,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Solana RPC Services</td>
                    <td className="py-2 px-4 border-b border-gray-200">$2,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$14,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Monitoring and Logging</td>
                    <td className="py-2 px-4 border-b border-gray-200">$1,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$7,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Development Tools and Licenses</td>
                    <td className="py-2 px-4 border-b border-gray-200">$2,000</td>
                    <td className="py-2 px-4 border-b border-gray-200">7</td>
                    <td className="py-2 px-4 border-b border-gray-200">$14,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200 font-semibold">Total Infrastructure Costs</td>
                    <td className="py-2 px-4 border-b border-gray-200"></td>
                    <td className="py-2 px-4 border-b border-gray-200"></td>
                    <td className="py-2 px-4 border-b border-gray-200 font-semibold">$85,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Additional Costs</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Item</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Security Audit</td>
                    <td className="py-2 px-4 border-b border-gray-200">$50,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Legal and Compliance</td>
                    <td className="py-2 px-4 border-b border-gray-200">$30,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Contingency (15%)</td>
                    <td className="py-2 px-4 border-b border-gray-200">$218,400</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200 font-semibold">Total Additional Costs</td>
                    <td className="py-2 px-4 border-b border-gray-200 font-semibold">$298,400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
           */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Total Project Cost</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Personnel Costs</td>
                    <td className="py-2 px-4 border-b border-gray-200">$1,291,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Infrastructure and Operational Costs</td>
                    <td className="py-2 px-4 border-b border-gray-200">$85,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Additional Costs</td>
                    <td className="py-2 px-4 border-b border-gray-200">$298,400</td>
                  </tr> */}
                  <tr className="bg-purple-50">
                    <td className="py-3 px-4 border-b border-gray-200 font-bold text-lg">Total Development Cost</td>
                    <td className="py-3 px-4 border-b border-gray-200 font-bold text-lg text-purple-700">$30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Risk Factors and Mitigation</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Technical Risks</h3>
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold">Smart Contract Vulnerabilities</h4>
                <p className="text-sm mb-1"><strong>Risk Level:</strong> High</p>
                <p className="text-sm mb-1"><strong>Impact:</strong> Critical</p>
                <p className="text-sm"><strong>Mitigation:</strong> Comprehensive testing, external security audits, bug bounty program</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold">Scalability Issues</h4>
                <p className="text-sm mb-1"><strong>Risk Level:</strong> Medium</p>
                <p className="text-sm mb-1"><strong>Impact:</strong> High</p>
                <p className="text-sm"><strong>Mitigation:</strong> Performance testing, scalable architecture design, optimization strategies</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold">Integration Complexity</h4>
                <p className="text-sm mb-1"><strong>Risk Level:</strong> Medium</p>
                <p className="text-sm mb-1"><strong>Impact:</strong> Medium</p>
                <p className="text-sm"><strong>Mitigation:</strong> Clear interface definitions, phased integration approach, comprehensive testing</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Project Risks</h3>
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold">Timeline Delays</h4>
                <p className="text-sm mb-1"><strong>Risk Level:</strong> Medium</p>
                <p className="text-sm mb-1"><strong>Impact:</strong> Medium</p>
                <p className="text-sm"><strong>Mitigation:</strong> Agile methodology, regular progress tracking, buffer time in estimates</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold">Resource Availability</h4>
                <p className="text-sm mb-1"><strong>Risk Level:</strong> Medium</p>
                <p className="text-sm mb-1"><strong>Impact:</strong> High</p>
                <p className="text-sm"><strong>Mitigation:</strong> Early recruitment, backup resources, knowledge sharing</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold">Requirement Changes</h4>
                <p className="text-sm mb-1"><strong>Risk Level:</strong> Medium</p>
                <p className="text-sm mb-1"><strong>Impact:</strong> Medium</p>
                <p className="text-sm"><strong>Mitigation:</strong> Clear scope definition, change management process, modular architecture</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Market Risks</h3>
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold">Regulatory Changes</h4>
                <p className="text-sm mb-1"><strong>Risk Level:</strong> Medium</p>
                <p className="text-sm mb-1"><strong>Impact:</strong> High</p>
                <p className="text-sm"><strong>Mitigation:</strong> Regulatory monitoring, adaptable design, compliance reviews</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold">Competitive Landscape</h4>
                <p className="text-sm mb-1"><strong>Risk Level:</strong> Medium</p>
                <p className="text-sm mb-1"><strong>Impact:</strong> Medium</p>
                <p className="text-sm"><strong>Mitigation:</strong> Market monitoring, unique value proposition, adaptable roadmap</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold">User Adoption</h4>
                <p className="text-sm mb-1"><strong>Risk Level:</strong> Medium</p>
                <p className="text-sm mb-1"><strong>Impact:</strong> High</p>
                <p className="text-sm"><strong>Mitigation:</strong> User-centric design, beta testing, community engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
