export default function WalletPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Crypto Wallet Architecture</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            The custom crypto wallet is designed as an Embedded Smart Wallet, offering advanced features beyond traditional wallets. It integrates seamlessly with the memecoin launchpad, providing enhanced security, usability, and functionality for users.
          </p>
          <p>
            This wallet architecture leverages Solana's account model and transaction processing capabilities to create a secure, efficient, and user-friendly experience for managing memecoins and interacting with the launchpad.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Key Management System</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Authorization Methods</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Biometric authentication (fingerprint, face recognition)</li>
              <li>Social login integration with additional security layers</li>
              <li>Passkey support for modern authentication</li>
              <li>Traditional password/PIN with enhanced security measures</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Key Encryption</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>AES-256-GCM encryption for private keys</li>
              <li>Client-side encryption with user-controlled keys</li>
              <li>Secure enclave utilization on supported devices</li>
              <li>Memory protection against key extraction</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Recovery Mechanisms</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seed phrase backup with clear user guidance</li>
              <li>Social recovery options through trusted contacts</li>
              <li>Time-locked recovery procedures</li>
              <li>Hardware security key integration</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Multisig Capabilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Optional multi-signature authorization</li>
              <li>Configurable approval thresholds</li>
              <li>Role-based access control</li>
              <li>Transaction approval workflows</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Transaction Signing Module</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Transaction Support</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Support for regular Solana transactions</li>
              <li>Versioned transaction handling for advanced features</li>
              <li>Address lookup tables for complex transactions</li>
              <li>Compute budget customization</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Transaction Processing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transaction creation with optimized parameters</li>
              <li>Secure signing process with key isolation</li>
              <li>Efficient submission with confirmation tracking</li>
              <li>Transaction history and status monitoring</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Fee Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fee estimation and display</li>
              <li>Fee sponsorship capabilities for improved UX</li>
              <li>Priority fee adjustment during network congestion</li>
              <li>Fee payment from separate fee accounts</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Reliability Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automatic retry for failed transactions</li>
              <li>Blockhash refresh for pending transactions</li>
              <li>Transaction simulation before signing</li>
              <li>Error handling with user-friendly messages</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Blockchain Integration</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Account Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>SOL and SPL token balance checking</li>
              <li>Token account creation and management</li>
              <li>Associated token account handling</li>
              <li>Account activity monitoring</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Transaction Monitoring</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time transaction status updates</li>
              <li>Transaction history with filtering options</li>
              <li>Detailed transaction information and decoding</li>
              <li>Notification system for transaction events</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Memecoin Operations</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seamless integration with token creation</li>
              <li>Launchpad participation capabilities</li>
              <li>Liquidity provision and management</li>
              <li>Trading functionality with DEX integration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Security Features</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Authentication</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multi-factor authentication options</li>
              <li>Session management with automatic timeouts</li>
              <li>Device binding capabilities</li>
              <li>Login attempt monitoring and limiting</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Transaction Security</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transaction simulation and preview</li>
              <li>Spending limits and approval workflows</li>
              <li>Whitelisted address management</li>
              <li>Cooling periods for large transactions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Threat Protection</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Suspicious transaction detection</li>
              <li>Phishing protection with domain verification</li>
              <li>Malicious contract detection</li>
              <li>Regular security audits and updates</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">User Experience Features</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Onboarding</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Simplified wallet creation process</li>
              <li>Guided setup with security recommendations</li>
              <li>Educational content for new users</li>
              <li>Customizable security settings</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Asset Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Intuitive token portfolio view</li>
              <li>Token grouping and categorization</li>
              <li>Price tracking and performance metrics</li>
              <li>Custom token addition with verification</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responsive design for all devices</li>
              <li>Accessibility compliance (WCAG standards)</li>
              <li>Customizable interface options</li>
              <li>Multi-language support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
