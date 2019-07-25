/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Lehijuniordevomtb from "./LehijuniordevomtbComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("Lehijuniordevomtb", module)
  .add("default", () => <Lehijuniordevomtb {...myProps} {...actions} />)
  .add("pinned", () => (
    <Lehijuniordevomtb {...myProps} pinned={true} {...actions} />
  ))
  .add("archived", () => (
    <Lehijuniordevomtb {...myProps} archived={true} {...actions} />
  ));
