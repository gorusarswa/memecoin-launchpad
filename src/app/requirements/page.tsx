export default function RequirementsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Memecoin Launchpad Requirements</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Token Creation and Distribution</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            The launchpad must provide comprehensive token creation and distribution capabilities:
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Token Standards Support</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Support for standard SPL tokens with basic functionality</li>
              <li>Integration with Token-2022 extensions for advanced features</li>
              <li>Metadata management through Metaplex standards</li>
              <li>Compatibility with major Solana wallets and explorers</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Customizable Parameters</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Token name and symbol configuration</li>
              <li>Supply management (fixed, mintable, or deflationary)</li>
              <li>Decimal precision settings</li>
              <li>Token icon and branding options</li>
              <li>Optional transfer fees and burn mechanisms</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Distribution Strategies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Configurable token allocation for team, community, investors</li>
              <li>Vesting schedules for different allocation groups</li>
              <li>Airdrop functionality for community distribution</li>
              <li>Presale and public sale mechanisms</li>
              <li>Fair launch options with anti-bot measures</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Liquidity Pool Integration</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Seamless liquidity pool creation and management is essential for successful token launches:
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Automated Pool Creation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>One-click liquidity pool creation</li>
              <li>Initial price configuration</li>
              <li>Automatic token and SOL/USDC pairing</li>
              <li>Customizable pool parameters</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">DEX Support</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Integration with Raydium for primary liquidity</li>
              <li>Support for Orca whirlpools for concentrated liquidity</li>
              <li>Optional Jupiter aggregation for best execution</li>
              <li>Cross-DEX liquidity management</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Liquidity Locking</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customizable liquidity locking periods</li>
              <li>Gradual unlock schedules</li>
              <li>Emergency unlock provisions with governance</li>
              <li>Transparent locking verification</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Fee Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Configurable trading fee percentages</li>
              <li>Fee distribution mechanisms</li>
              <li>Protocol fee settings</li>
              <li>Analytics for fee collection and distribution</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Trading Functionality</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Robust trading capabilities are required to support active markets:
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Token Swapping</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Simple and advanced swap interfaces</li>
              <li>Market and limit order support</li>
              <li>Slippage protection</li>
              <li>Transaction preview and confirmation</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Price Discovery</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time price feeds</li>
              <li>Historical price charts</li>
              <li>Volume and liquidity indicators</li>
              <li>Market depth visualization</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Order Routing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Smart routing to optimal liquidity sources</li>
              <li>Split orders across multiple pools</li>
              <li>MEV protection</li>
              <li>Gas optimization strategies</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Trading Analytics</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trading volume metrics</li>
              <li>Price impact calculations</li>
              <li>Market cap and token statistics</li>
              <li>User trading history</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">User Interface Requirements</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            A user-friendly interface is critical for adoption and usability:
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Token Creation Wizard</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Step-by-step guided process</li>
              <li>Parameter explanation and recommendations</li>
              <li>Preview and validation</li>
              <li>Template selection for common use cases</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Launchpad Dashboard</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Launch status monitoring</li>
              <li>Contribution tracking</li>
              <li>Whitelist management interface</li>
              <li>Distribution controls and analytics</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Liquidity Management Tools</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pool creation and monitoring interface</li>
              <li>Liquidity addition and removal controls</li>
              <li>Fee collection and analytics</li>
              <li>Lock status visualization</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Trading Interface</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Intuitive swap interface</li>
              <li>Advanced trading features for experienced users</li>
              <li>Real-time charts and market data</li>
              <li>Transaction history and portfolio tracking</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">General UI Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responsive design for all devices</li>
              <li>Accessibility compliance</li>
              <li>Dark/light mode support</li>
              <li>Localization for multiple languages</li>
              <li>Intuitive navigation and information architecture</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Community Engagement Features</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Tools to help project teams build and engage with their communities:
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Social Integration</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Social media account linking</li>
              <li>Automated announcements for key events</li>
              <li>Community milestone tracking</li>
              <li>Social sharing capabilities</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Community Tools</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Airdrop and reward distribution</li>
              <li>Community voting mechanisms</li>
              <li>Leaderboards and engagement metrics</li>
              <li>Referral and ambassador programs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
