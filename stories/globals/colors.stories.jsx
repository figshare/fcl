import React, { Fragment } from "react";
import { withDesign } from "storybook-addon-designs";

import "@figshare/ui/styles/index.css";
import styles from "./colors.stories.css";


const onSaveTitleClipboard = (ev) => {
  const dummy = document.createElement("textarea");
  const { title } = ev.target;

  document.body.appendChild(dummy);
  dummy.value = title;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
};

const ColorTile = (colorProps) => {
  const { title } = colorProps;
  const style = { background: `var(${title})`, cursor: "pointer" };

  return (
    <button
      className={styles.colorTile}
      style={style}
      title={title}
      type="button"
      onClick={onSaveTitleClipboard}
    />
  );
};

const BorderTile = (colorProps) => {
  const { title } = colorProps;
  const style = { borderColor: `var(${title})`, cursor: "pointer" };

  return (
    <button
      className={styles.borderTile}
      style={style}
      title={title}
      type="button"
      onClick={onSaveTitleClipboard}
    />
  );
};

const StateTiles = (options) => {
  const { identifier } = options;

  return (
    <Fragment>
      <ColorTile title={`--color-${identifier}`} />
      <ColorTile title={`--color-${identifier}_hover`} />
      <ColorTile title={`--color-${identifier}_click`} />
      <ColorTile title={`--color-${identifier}_disabled`} />
    </Fragment>
  );
};

const StateHeadings = () => (
  <Fragment>
    <div className={styles.textTile}> Default </div>
    <div className={styles.textTile}> Hover </div>
    <div className={styles.textTile}> On Click </div>
    <div className={styles.textTile}> Disabled </div>
  </Fragment>
);

const ButtonColorMatrix = (options) => {
  const { title, identifier } = options;

  return (
    <div className={styles.wrapperColumn}>
      <h3> {title} </h3>
      <div className={styles.wrapper}>
        <div className={styles.textTile} />
        <div className={styles.textTile}> Default </div>
        <div className={styles.textTile}> Hover </div>
        <div className={styles.textTile}> On Click </div>
        <div className={styles.textTile}> Disabled </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textTile}>BG</div>
        <StateTiles identifier={`${identifier}-background`} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textTile}>label</div>
        <StateTiles identifier={`${identifier}-label`} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textTile}>icon</div>
        <StateTiles identifier={`${identifier}-icon`} />
      </div>
    </div>
  );
};

const IconColorMatrix = (options) => {
  const { title, identifier } = options;

  return (
    <div className={styles.wrapperColumn}>
      <h3> {title} </h3>
      <div className={styles.wrapper}>
        <div className={styles.textTile} />
        <div className={styles.textTile}> Default </div>
        <div className={styles.textTile}> Hover </div>
        <div className={styles.textTile}> On Click </div>
        <div className={styles.textTile}> Disabled </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textTile}>BG</div>
        <StateTiles identifier={`${identifier}-background`} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textTile}>icon</div>
        <StateTiles identifier={`${identifier}-icon`} />
      </div>
    </div>
  );
};

const CheckboxColors = (options) => {
  const { title, identifier } = options;

  return (
    <div className={styles.wrapperColumn}>
      <h3> {title} </h3>
      <div className={styles.wrapper}>
        <div className={styles.textTile} />
        <div className={styles.textTile}> Unchecked </div>
        <div className={styles.textTile}> Checked </div>
        <div className={styles.textTile}> Hover </div>
        <div className={styles.textTile}> On Click </div>
        <div className={styles.textTile}> Disabled </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textTile}>Icon</div>
        <ColorTile title={`--color-${identifier}-icon`} />
        <ColorTile title={`--color-${identifier}-icon_checked`} />
        <ColorTile title={`--color-${identifier}-icon_hover`} />
        <ColorTile title={`--color-${identifier}-icon_click`} />
        <ColorTile title={`--color-${identifier}-icon_disabled`} />
      </div>
    </div>
  );
};

const SwitchColors = (options) => {
  const { title, identifier } = options;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperColumn}>
        <h3> {title} </h3>
        <div className={styles.wrapper}>
          <div className={styles.textTile} />
          <div className={styles.textTile}> Default </div>
          <div className={styles.textTile}> Hover </div>
          <div className={styles.textTile}> On Click </div>
          <div className={styles.textTile}> Disabled </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textTile}>Unchecked</div>
          <ColorTile title={`--color-switch-${identifier}`} />
          <ColorTile title={`--color-switch-${identifier}_hover`} />
          <ColorTile title={`--color-switch-${identifier}_click`} />
          <ColorTile title={`--color-switch-${identifier}_disabled`} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textTile}>Checked</div>
          <ColorTile title={`--color-switch-${identifier}_checked`} />
          <ColorTile title={`--color-switch-${identifier}_checked_hover`} />
          <ColorTile title={`--color-switch-${identifier}_checked_click`} />
          <ColorTile title={`--color-switch-${identifier}_checked_disabled`} />
        </div>
      </div>
    </div>
  );
};

export const Colors = () => (
  <div className={styles.container}>
    <h2> Figshare brand </h2>
    <div className={styles.wrapper}>
      <ColorTile title="--color-branding-figRed" />
      <ColorTile title="--color-branding-figBlue" />
      <ColorTile title="--color-branding-figTurquoise" />
      <ColorTile title="--color-branding-figGreen" />
    </div>

    <h2> General </h2>
    <div className={styles.wrapperColumn}>
      <h3> Typography </h3>
      <div className={styles.wrapper}>
        <ColorTile title="--color-typography-primary" />
        <ColorTile title="--color-typography-primaryAlt" />
        <ColorTile title="--color-typography-secondary" />
        <ColorTile title="--color-typography-tertiary" />
        <ColorTile title="--color-typography-disabled" />
        <ColorTile title="--color-typography-error" />
        <ColorTile title="--color-typography-selection" />
      </div>

      <h3> Background </h3>
      <div className={styles.wrapper}>
        <ColorTile title="--color-layout-primary-background" />
        <ColorTile title="--color-layout-secondary-background" />
        <ColorTile title="--color-layout-secondaryAlt-background" />
        <ColorTile title="--color-layout-tertiary-background" />
        <ColorTile title="--color-layout-tertiaryAlt-background" />
        <ColorTile title="--color-layout-success-background" />
        <ColorTile title="--color-layout-warning-background" />
        <ColorTile title="--color-layout-error-background" />
        <ColorTile title="--color-layout-skeletonLoading-background" />
      </div>

      <h3> Border </h3>
      <div className={styles.wrapper}>
        <BorderTile title="--color-border-primary" />
        <BorderTile title="--color-border-secondary" />
        <BorderTile title="--color-border-tertiary" />
        <BorderTile title="--color-border-active" />
        <BorderTile title="--color-border-warning" />
        <BorderTile title="--color-border-error" />
        <div
          className={styles.borderTile}
          style={ { boxShadow: "0 0 0 2px var(--color-border-focus), 0 0 4px 2px var(--color-border-focusShadow)" } }
          title="focus state"
        />
      </div>

      <h3> Icon </h3>
      <div className={styles.wrapper}>
        <ColorTile title="--color-icon-primary" />
        <ColorTile title="--color-icon-primaryAlt" />
        <ColorTile title="--color-icon-secondary" />
        <ColorTile title="--color-icon-secondaryAlt" />
        <ColorTile title="--color-icon-tertiary" />
        <ColorTile title="--color-icon-tertiaryAlt" />
        <ColorTile title="--color-icon-success" />
        <ColorTile title="--color-icon-successAlt" />
        <ColorTile title="--color-icon-error" />
      </div>
    </div>

    <h2> Button </h2>
    <div className={styles.wrapper}>
      <ButtonColorMatrix identifier="button-primary" title="Primary" />
      <ButtonColorMatrix identifier="button-primaryAlt" title="Primary Alternative" />
    </div>

    <div className={styles.wrapper}>
      <ButtonColorMatrix identifier="button-secondary" title="Secondary" />
      <ButtonColorMatrix identifier="button-secondaryAlt" title="Secondary Alternative" />
    </div>

    <div className={styles.wrapper}>
      <ButtonColorMatrix identifier="button-tertiary" title="Tertiary" />
      <ButtonColorMatrix identifier="button-tertiaryAlt" title="Tertiary Alternative" />
    </div>

    <div className={styles.wrapper}>
      <ButtonColorMatrix identifier="button-inverted" title="Inverted" />
    </div>

    <h2> Icon Button </h2>
    <div className={styles.wrapper}>
      <IconColorMatrix identifier="iconButton-primary" title="Primary" />
      <IconColorMatrix identifier="iconButton-primaryAlt" title="Primary Alternative" />
    </div>

    <div className={styles.wrapper}>
      <IconColorMatrix identifier="iconButton-secondary" title="Secondary" />
      <IconColorMatrix identifier="iconButton-secondaryAlt" title="Secondary Alternative" />
    </div>

    <div className={styles.wrapper}>
      <IconColorMatrix identifier="iconButton-tertiary" title="Tertiary" />
    </div>

    <h2> Select box - trigger button </h2>
    <div className={styles.wrapper}>
      <div className={styles.wrapperColumn}>
        <div className={styles.wrapper}>
          <div className={styles.textTile} />
          <StateHeadings />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textTile}>BG</div>
          <StateTiles identifier={"dropdownTriggerButton-background"} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textTile}>icon</div>
          <StateTiles identifier={"dropdownTriggerButton-icon"} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textTile}>label</div>
          <div className={styles.textTile} style={ { flex: "1 1 auto" } }>
            Inherited from typography
          </div>
        </div>
      </div>
    </div>

    <h2> Input </h2>
    <div className={styles.wrapper}>
      <div className={styles.wrapperColumn}>
        <div className={styles.wrapper}>
          <div className={styles.textTile} />
          <div className={styles.textTile}>DEFAULT</div>
          <div className={styles.textTile} />
          <div className={styles.textTile}>DISABLED</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textTile}>BG</div>
          <ColorTile title="--color-input-background" />
          <div className={styles.textTile} />
          <ColorTile title="--color-input-background_disabled" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textTile}>label</div>
          <div className={styles.textTile} style={ { flex: "1 1 auto" } }>
            Inherited from typography
          </div>
        </div>
      </div>
    </div>

    <h2> Checkbox </h2>
    <div className={styles.wrapper}>
      <CheckboxColors identifier="checkbox" title="Default" />
      <CheckboxColors identifier="checkbox-alt" title="Alternative" />
    </div>

    <h2> Switch </h2>
    <SwitchColors identifier="slider" title="Slider" />
    <SwitchColors identifier="handle" title="Handle" />
    <SwitchColors identifier="label" title="Label" />
  </div>
);

const figmaFile = "YKkIGgDGEk4WRjSFHZQdK1il/00.Atomic-components?node-id=971%3A30";
Colors.parameters = {
  design: {
    type: "figma",
    url: `https://www.figma.com/file/${figmaFile}`,
  },
  backgrounds: {
    default: "gray",
    values: [{ name: "gray", value: "#c8c8c8" }],
  },
};

export default {
  title: "Global Styles/Colors",
  decorators: [withDesign],
};
