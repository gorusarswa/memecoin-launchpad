export default function ArchitecturePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Solana Blockchain Architecture</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Key Features of Solana</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>High Throughput</strong>: Processes thousands of transactions per second</li>
            <li><strong>Low Fees</strong>: Minimal transaction costs</li>
            <li><strong>Fast Finality</strong>: Transactions confirm in seconds</li>
            <li><strong>Scalability</strong>: Designed to scale with network growth</li>
            <li><strong>Developer-Friendly</strong>: Robust tools and resources</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Consensus Mechanism</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Solana uses a unique combination of Proof of History (PoH) and Proof of Stake (PoS):
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Proof of History (PoH)</h3>
            <p className="mb-2">
              Proof of History is a sequence of computations that can provide a way to cryptographically verify passage of time between two events. It uses a verifiable delay function that requires a specific number of sequential steps to evaluate, but can be efficiently verified.
            </p>
            <p>
              This creates a historical record of events, enabling parallel processing and improving throughput.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Proof of Stake (PoS)</h3>
            <p className="mb-2">
              Validators stake SOL tokens to participate in the consensus process. The more tokens staked, the more voting power a validator has.
            </p>
            <p>
              This approach is more energy-efficient than Proof of Work systems and provides economic incentives for validators to act honestly.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Programming Model</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Rust</h3>
            <p>
              Rust is the primary language for Solana smart contract development. It offers memory safety, concurrency, and performance benefits that make it ideal for blockchain applications.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Anchor Framework</h3>
            <p>
              Anchor is a framework for Solana's Sealevel runtime that provides several developer-friendly features:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Simplified account validation</li>
              <li>Automatic serialization/deserialization</li>
              <li>TypeScript IDL generation</li>
              <li>Built-in testing framework</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Solana Program Library (SPL)</h3>
            <p>
              The Solana Program Library provides standard implementations for common functionality:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Token creation and management</li>
              <li>Token swaps</li>
              <li>Lending protocols</li>
              <li>Name services</li>
              <li>Staking programs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Token Standards</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">SPL Tokens</h3>
            <p>
              SPL Tokens are Solana's equivalent to Ethereum's ERC-20 standard. They provide a common interface for fungible tokens with features like:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Minting and burning</li>
              <li>Transfers between accounts</li>
              <li>Delegation of authority</li>
              <li>Token metadata</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Token-2022</h3>
            <p>
              Token-2022 is an enhanced token standard that extends the functionality of SPL tokens with features like:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Transfer fees</li>
              <li>Non-transferable tokens</li>
              <li>Confidential transfers</li>
              <li>Interest-bearing tokens</li>
              <li>Token metadata extensions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Metaplex</h3>
            <p>
              Metaplex provides standards and tools for creating and managing NFTs on Solana, including:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Metadata management</li>
              <li>Royalty enforcement</li>
              <li>Creator verification</li>
              <li>Auction mechanisms</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Transaction Processing</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Transaction Structure</h3>
            <p>
              Solana transactions consist of:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>One or more instructions</li>
              <li>A list of account addresses that the transaction will read from or write to</li>
              <li>One or more signatures from the required signers</li>
              <li>Recent blockhash to prevent replay attacks</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Parallel Processing</h3>
            <p>
              Solana's runtime can process transactions in parallel when they don't access the same accounts, significantly increasing throughput.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Fee Model</h3>
            <p>
              Solana uses a fee model based on:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Base fee per signature</li>
              <li>Compute units consumed by the transaction</li>
              <li>Priority fees for faster processing during network congestion</li>
            </ul>
            <p className="mt-2">
              Fees are paid in SOL and are typically much lower than on other blockchains, making Solana ideal for high-frequency, low-value transactions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Advantages for Memecoin Launchpad</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Low Transaction Costs</strong>: Enables affordable token creation, transfers, and trading, making it accessible to a wider audience.
            </li>
            <li>
              <strong>High Performance</strong>: Supports high trading volumes and rapid price updates, essential for volatile memecoin markets.
            </li>
            <li>
              <strong>Fast Finality</strong>: Provides quick transaction confirmation, improving user experience during token launches and trading.
            </li>
            <li>
              <strong>Rich Token Standards</strong>: Offers flexible token creation options with customizable parameters through SPL and Token-2022 standards.
            </li>
            <li>
              <strong>Developer Ecosystem</strong>: Provides robust tools, libraries, and frameworks that simplify development and integration.
            </li>
            <li>
              <strong>Growing Community</strong>: Benefits from Solana's large and active user base, providing potential users for new memecoins.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
