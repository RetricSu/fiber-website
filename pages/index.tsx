import Buttons from "components/Buttons";
import { Footer } from "components/Footer";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/router";
const Section1 = dynamic(() => import('../components/Section1'), { ssr: false });
const Section2 = dynamic(() => import('../components/Section2'), { ssr: false });
const Section3 = dynamic(() => import('../components/Section3'), { ssr: false });
const Section4 = dynamic(() => import('../components/Section4'), { ssr: false });
const Satoshi = localFont({
  src: "../public/font/Satoshi-Light.woff",
  display: "swap",
});
const Cabinet = localFont({
  src: "../public/font/CabinetGrotesk-Bold.woff",
  display: "swap",
});
const Homepage = () => {

  return (
    <>
      <main className={Satoshi.className}>
        <Section1 />
        <Section2 />
        <Section3 />
       
        
        <section className="feature_compare">
          <table>
            <tbody>
              <tr>
                <th>Feature</th>
                <td>
                  <span className="ln">Lightning Network</span>
                </td>
                <td>
                  <span className="fn">Fiber Network</span>
                </td>
              </tr>
              <tr>
                <th>Assets</th>
                <td>
                  <span className="ln">BTC Only</span>
                </td>
                <td>
                  <span className="fn">
                   CKB / User Defined Token
                  </span>
                </td>
              </tr>
              <tr>
                <th>Cross Chain Hub</th>
                <td>
                  <span className="ln">No</span>
                </td>
                <td>
                  <span className="fn">Yes</span>
                </td>
              </tr>
              <tr>
                <th>WatchTower Storage</th>
                <td>
                  <span className="ln">O(n)</span>
                </td>
                <td>
                  <span className="fn">O(1)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <Section4 />
        <section className={"roadmap "+Cabinet.className} id="roadmap">
          <div className="roadmap_main">
            <div className="meteor_line">
              <svg
                width="1205"
                height="84"
                viewBox="0 0 1205 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1200 79L17.2126 79C8.34156 79 2.53722 69.7069 6.42926 61.7352L34.1293 5"
                  stroke="url(#paint0_linear_4_189)"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4_189"
                    x1="599"
                    y1="79"
                    x2="599"
                    y2="5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00CC9B" />
                    <stop offset="1" stop-color="#00CC9B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2>Roadmap </h2>
            <dl>
              <dt>
                <span>2024 Q3</span>
              </dt>
              <dd>Fiber Network Testing</dd>
              <dt>
                <span>2024 Q4</span>
              </dt>
              <dd>Fiber Network Mainnet Launch</dd>
              <dt>
                <span>2025</span>
              </dt>
              <dd>Adding More Features (e.g. Privacy Protection Algorithms)</dd>
            </dl>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })

export default Homepage;
