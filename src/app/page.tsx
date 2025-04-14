"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Tabs from "@/components/Tabs";
import Accordion, { AccordionItem } from "@/components/Accordion";
import Counter from "@/components/Counter";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");

  const projectOverviewTabs = [
    {
      id: "objectives",
      title: "Objectives",
      content: (
        <ul className="list-disc pl-6 mb-4">
          <li>Create a user-friendly platform for memecoin creation and launch on Solana</li>
          <li>Develop a secure and feature-rich custom crypto wallet</li>
          <li>Implement liquidity pool and trading functionality</li>
          <li>Ensure scalability, security, and compliance with best practices</li>
        </ul>
      ),
    },
    {
      id: "features",
      title: "Key Features",
      content: (
        <ul className="list-disc pl-6 mb-4">
          <li>Token creation with customizable parameters</li>
          <li>Launchpad for token sales and distribution</li>
          <li>Liquidity pool creation and management</li>
          <li>Trading interface with price discovery</li>
          <li>Custom crypto wallet with advanced security features</li>
          <li>Staking and rewards mechanisms</li>
        </ul>
      ),
    },
    {
      id: "audience",
      title: "Target Audience",
      content: (
        <ul className="list-disc pl-6">
          <li>Memecoin creators and project teams</li>
          <li>Crypto enthusiasts and investors</li>
          <li>DeFi users seeking new investment opportunities</li>
          <li>Blockchain developers building on Solana</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Executive Summary</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            This proposal outlines a complete solution for developing a memecoin launchpad on the Solana blockchain with an integrated custom crypto wallet. The platform will enable users to create, launch, and manage meme tokens with features for liquidity provision, trading, and community engagement.
          </p>
          <p className="mb-4">
            The proposed solution leverages Solana's high-performance blockchain to provide a seamless user experience with low transaction fees and fast processing times. The custom crypto wallet integration enhances security and usability, offering features like multi-signature authorization, transaction signing, and fee abstraction.
          </p>
          <p>
            Based on our comprehensive research and planning, we estimate the development to take approximately 3 months with a total cost of around $30,000. The project will be implemented in six phases, allowing for incremental delivery of value and opportunities for feedback throughout the development process.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Project Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Tabs tabs={projectOverviewTabs} defaultTab="objectives" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Technical Architecture</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">The system follows a modern, scalable architecture with the following components:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Frontend Applications">
              <ul className="list-disc pl-6">
                <li>Web application (responsive design)</li>
                <li>Mobile applications (optional extension)</li>
              </ul>
            </Card>
            
            <Card title="Backend Services">
              <ul className="list-disc pl-6">
                <li>API services</li>
                <li>Authentication services</li>
                <li>Blockchain interaction services</li>
                <li>Data indexing and caching services</li>
              </ul>
            </Card>
            
            <Card title="Smart Contracts">
              <ul className="list-disc pl-6">
                <li>Token creation contracts</li>
                <li>Launchpad management contracts</li>
                <li>Liquidity pool contracts</li>
                <li>Trading interface contracts</li>
                <li>Smart wallet contracts</li>
                <li>Staking and rewards contracts</li>
              </ul>
            </Card>
            
            <Card title="Infrastructure">
              <ul className="list-disc pl-6">
                <li>Solana RPC nodes</li>
                <li>Database systems</li>
                <li>Caching layers</li>
                <li>Monitoring and alerting systems</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Development Timeline</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Phase Progress</h3>
            <div className="space-y-4">
              <div>
                <ProgressBar percent={100} label="Foundation and Infrastructure Setup" showPercent={true} color="blue" />
              </div>
              <div>
                <ProgressBar percent={75} label="Smart Contract Development" showPercent={true} color="purple" />
              </div>
              <div>
                <ProgressBar percent={50} label="Backend Services Development" showPercent={true} color="green" />
              </div>
              <div>
                <ProgressBar percent={25} label="Frontend Development" showPercent={true} color="yellow" />
              </div>
              <div>
                <ProgressBar percent={10} label="Integration and Testing" showPercent={true} color="red" />
              </div>
              <div>
                <ProgressBar percent={0} label="Deployment and Launch" showPercent={true} color="gray" />
              </div>
            </div>
          </div>
          
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
                  <td className="py-2 px-4 border-b border-gray-200">4 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">4 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">2. Smart Contract Development</td>
                  <td className="py-2 px-4 border-b border-gray-200">8 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">12 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">3. Backend Services Development</td>
                  <td className="py-2 px-4 border-b border-gray-200">6 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">18 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">4. Frontend Development</td>
                  <td className="py-2 px-4 border-b border-gray-200">6 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">24 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">5. Integration and Testing</td>
                  <td className="py-2 px-4 border-b border-gray-200">4 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">28 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">6. Deployment and Launch</td>
                  <td className="py-2 px-4 border-b border-gray-200">2 weeks</td>
                  <td className="py-2 px-4 border-b border-gray-200">30 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">Total Development Time: 30 weeks (approximately 7 months)</p>
        </div>
      </section> */}

      {/* <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Cost Estimation</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Personnel Costs</h3>
              <p className="text-2xl font-bold text-purple-600">
                <Counter start={0} end={1291000} prefix="$" />
              </p>
              <p className="text-sm text-gray-600">Development team, QA, project management</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Infrastructure Costs</h3>
              <p className="text-2xl font-bold text-purple-600">
                <Counter start={0} end={85000} prefix="$" />
              </p>
              <p className="text-sm text-gray-600">Environments, RPC services, monitoring</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Additional Costs</h3>
              <p className="text-2xl font-bold text-purple-600">
                <Counter start={0} end={298400} prefix="$" />
              </p>
              <p className="text-sm text-gray-600">Security audit, legal, contingency</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total Project Cost</h3>
            <p className="text-3xl font-bold text-purple-700">
              <Counter start={0} end={1674400} prefix="$" />
            </p>
          </div>
        </div>
      </section> */}

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Frequently Asked Questions</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Accordion>
            <AccordionItem title="What is a memecoin launchpad?">
              <p>
                A memecoin launchpad is a platform that enables users to create, launch, and manage meme-based cryptocurrencies on a blockchain. It provides tools for token creation, initial distribution, liquidity provision, and trading functionality, making it easier for creators to launch their memecoins without deep technical knowledge.
              </p>
            </AccordionItem>
            
            <AccordionItem title="Why build on Solana?">
              <p>
                Solana offers several advantages for a memecoin launchpad:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>High throughput (thousands of transactions per second)</li>
                <li>Low transaction fees (fractions of a cent)</li>
                <li>Fast finality (transactions confirm in seconds)</li>
                <li>Rich token standards (SPL tokens and Token-2022)</li>
                <li>Growing ecosystem and user base</li>
              </ul>
            </AccordionItem>
            
            <AccordionItem title="What features will the custom wallet have?">
              <p>
                The custom crypto wallet will include:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Multi-signature authorization</li>
                <li>Transaction signing and verification</li>
                <li>Fee abstraction and sponsorship</li>
                <li>Spending limits and controls</li>
                <li>Recovery mechanisms</li>
                <li>Integration with the launchpad platform</li>
              </ul>
            </AccordionItem>
            
            <AccordionItem title="How long will development take?">
              <p>
                The estimated development timeline is approximately 3 months (13 weeks), divided into six phases:
              </p>
              <ol className="list-decimal pl-6 mt-2">
                <li>Foundation and Infrastructure Setup (2 weeks)</li>
                <li>Smart Contract Development (4 weeks)</li>
                <li>Backend Services Development (4 weeks)</li>
                <li>Frontend Development (4 weeks)</li>
                <li>Integration and Testing (2 weeks)</li>
                <li>Deployment and Launch (1 weeks)</li>
              </ol>
            </AccordionItem>
            
            <AccordionItem title="What is the estimated cost?">
              <p>
                The total estimated cost is approximately $30000, broken down as follows:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Development Costs: $30,000</li>
                <li>Infrastructure Costs</li>
                <li>Additional Costs (security audit, legal, contingency)</li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Next Steps</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ol className="list-decimal pl-6">
            <li className="mb-2">Review and approve the project proposal</li>
            <li className="mb-2">Finalize scope and requirements</li>
            <li className="mb-2">Assemble the development team</li>
            <li className="mb-2">Begin Phase 1 implementation</li>
          </ol>
          <p className="mt-4">
            We are excited about the opportunity to develop this innovative platform and look forward to your feedback on this proposal.
          </p>
        </div>
      </section>
    </div>
  );
}
