import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

function FeaturesBlocks({refFooter}) {
  const data = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "Should I Invest in SMATMATRIX",
            content: `investment or not is your decision if you invest in smatmatrix we guarantee that you will be profitable`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
     bgColor: 'Green',
    // titleTextColor: 'White',
    // titleTextSize: '48px',
    rowTitleColor: 'White',
    rowTitleTextSize: 'medium',
    rowContentColor: 'White',
    rowContentTextSize: '16px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    rowContentPaddingRight: '150px',
    arrowColor: "White",
    transitionDuration: "1s",
     timingFunc: "ease"
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};
  return (
    <section ref={refFooter} >
      <div   className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"> FAQ </h2>
        </div>
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
        </div>
      </div>
    </section>
  );
}


export default FeaturesBlocks;
