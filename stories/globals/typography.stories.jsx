import classnames from "classnames";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import "@figshare/ui/styles/index.css";
import styles from "./typography.stories.css";


const figmaFile = "YKkIGgDGEk4WRjSFHZQdK1il/00.Atomic-components?node-id=971%3A31";

export const Showcase = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      TYPOGRAPHY
    </h1>

    <div className={classnames(styles.sizeXXXL, styles.item)}>
      XXXL: 36px / 60px
    </div>
    <div className={classnames(styles.sizeXXL, styles.item)}>
      XXL - 28px / 42px
    </div>
    <div className={classnames(styles.sizeXL, styles.item)}>
      XL - 24px / 36px
    </div>
    <div className={classnames(styles.sizeL, styles.item)}>
      L - 20px / 30px
    </div>
    <div className={classnames(styles.sizeM, styles.item)}>
      M - 16px / 24px
    </div>
    <div className={classnames(styles.sizeS, styles.item)}>
      S - 14px / 24px
    </div>
    <div className={classnames(styles.sizeXS, styles.item)}>
      XS - 12px / 18px
    </div>
  </div>
);

Showcase.parameters = {
  design: {
    type: "figma",
    url: `https://www.figma.com/file/${figmaFile}`,
  },
};


export const DefaultTypography = () => (
  <article className={styles.container}>
    <h1> Yellow sea mediated segregation between North East Asian Dryophytes species </h1>
    <h2> Abstract </h2>
    <p>
      While comparatively few amphibian species have been described on the North East Asian
      mainland in the last decades, several species have been the subject of taxonomical
      debates in relation to the Yellow sea. Here, we sampled Dryophytes sp. treefrogs from
      the Republic of Korea, the Democratic People’s Republic of Korea and the People’s
      Republic of China to clarify the status of this clade around the Yellow sea and determine
      the impact of sea level change on treefrogs’ phylogenetic relationships.
    </p>
    <p>
      Based on genetics, call properties, adult morphology, tadpole morphology and niche
      modelling, we determined the segregated status species of
      <a href="#1"> D. suweonensis and D. immaculatus</a>.
      We then proceeded to describe a new treefrog species, D. flaviventris sp. nov., from the
      central lowlands of the Republic of Korea.
    </p>
    <h2> Introduction </h2>
    <p>
      Sea level fluctuations in relation to climatic oscillations have consecutively isolated
      and connected populations [1–3]. In some cases, the interval between sea level variations
      resulted in drift and speciation [4], in others, the clades were brought back in contact
      before isolation [5].
    </p>
    <p>
      For instance, <a href="#1">Hylid treefrogs</a> isolated on peninsulas in the Mediterranean
      sea diverged as a result of sea level variations in conjunction with ice ages [6, 7], while
      other species such as green toads (Bufo viridis subgroup) show widespread hybridisation in
      contact zones [8]. In addition, other species display “speciation reversal” following
      hybridisation and reversal into a shared gene-pool [9], such as sticklebacks [10].
    </p>
    <h2> Materials and methods </h2>
    <h3> Field sampling </h3>
    <p>
      Data for the three clades was collected between 2016 and 2019 in the Republic of Korea
      (hereafter R Korea), the <a href="#1">Democratic People’s Republic of Korea</a> (hereafter DPR
      Korea) and the People’s Republic of China (hereafter China; Fig 1).
    </p>
    <p>
      The samples in Paju (R Korea) area were collected in 2013 as follows:
    </p>
    <ul>
      <li> D. suweonensis </li>
      <ul>
        <li> D. flaviventris </li>
        <li> D. suweonensis </li>
        <li>
          D. a very long list element lorem iosum dolor est that goes on two lines lorem iosum dolor
          est sit amet consectetur
        </li>
        <ul>
          <li> D. suweonensis </li>
          <li> D. immaculatus </li>
        </ul>
      </ul>
      <li>
        D. immaculatus a very long list element lorem iosum dolor est that goes on two lines lorem
        iosum dolor est sit amet consectetur
      </li>
      <li> Pyeongtaek </li>
    </ul>
    <p>
      To be able to analyse morphometric variations without any bias due to the size of the individuals,
      we adjusted the dataset by dividing each value by the SVL of the individual. This procedure also
      eliminated any bias introduced by alcohol preserved samples. <a href="#1">Variables in the dataset </a>
      were generally correlated (<a href="#1">Pearson’s correlation</a>; n = 55; Table 4) so we used a PCA
      here as well to analyse variations between each of the clades.
    </p>
    <p>
      The samples in Paju (R Korea) area were collected in 2013 as follows:
    </p>
    <ol>
      <li> D. suweonensis </li>
      <ol>
        <li> D. flaviventris </li>
        <li> D. suweonensis </li>
        <li>
          D. a very long list element lorem iosum dolor est that goes on two lines lorem iosum dolor
          est sit amet consectetur
        </li>
        <ol>
          <li>D. suweonensis </li>
          <li>D. immaculatus </li>
        </ol>
      </ol>
      <li>
        D. immaculatus a very long list element lorem iosum dolor est that goes on two lines lorem
        iosum dolor est sit amet consectetur
      </li>
      <li> Pyeongtaek </li>
    </ol>
    <p>
      To be able to analyse morphometric variations without any bias due to the size of the individuals,
      we adjusted the dataset by dividing each value by the SVL of the individual. This procedure also
      eliminated any bias introduced by alcohol preserved samples. <a href="#1">Variables in the dataset </a>
      were generally correlated (<a href="#1">Pearson’s correlation</a>; n = 55; Table 4) so we used a PCA
      here as well to analyse variations between each of the clades.
    </p>

    <h3> Tadpoles reared in captivity </h3>
    <h4> Tadpole morphology </h4>
    <p>
      Next, we looked at <strong>morphological variations</strong> between tadpoles of the three clades
      examined here, with a focus on oral morphology.
    </p>
    <p>
      The data for D. suweonensis arises from five wild caught pairs with tadpoles reared in captivity
      (see [78] for details on rearing protocol) resulting in 100 tadpoles (n = 20 per family) examined
      and photographed for their oral structure.
    </p>

    <h4> Lumenera Corporation </h4>
    <h5> Tadpoles </h5>
    <p>
      The data for D. immaculatus is based on four tadpoles captured in Hefei (32.310°N, 118.583°E) and
      observed under the microscope (Infinity1-1C, Lumenera Corporation; Nepean, Canada), and compared
      to the work presented in Fei [59]. For the comparison between the three clades, we focused on the
      number of upper and lower labial tooth rows and the presence of medial gaps.
    </p>

    <h5> Impact of sea level change on treefrogs’ phylogenetic relationships </h5>
    <h6> Impact of sea level change on treefrogs’ phylogenetic relationships </h6>
    <p>
      The Democratic People’s Republic of Korea and the People’s Republic of China to clarify the status
      of this clade around the Yellow sea and determine the impact of sea level change on treefrogs’
      phylogenetic relationships.
    </p>
  </article>
);

DefaultTypography.parameters = {
  design: {
    type: "figma",
    url: `https://www.figma.com/file/${figmaFile}`,
  },
};


export default {
  title: "Global Styles/Typography",
  decorators: [withDesign],
};
