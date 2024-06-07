import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>MTBF MTTR</title>
        <link rel="icon" href="/aqua.jpg" />
      </Head>

      <div className="calculator-title">
        <h2 className="mt-5 mb-4 text-center">MTBF & MTTR Calculator</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Link href="/line1">
              <div className="box text-center py-5 border">
                <FontAwesomeIcon icon={faCogs} size="3x" className="mb-3" />
                <h2>LINE 1</h2>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="/line2">
              <div className="box text-center py-5 border">
                <FontAwesomeIcon icon={faCogs} size="3x" className="mb-3" />
                <h2>LINE 2</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .box {
          background-color: #f8f9fa;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .box:hover {
          background-color: #e9ecef;
        }
        .logout-btn {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
