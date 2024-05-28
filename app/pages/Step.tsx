"use client";

import React, { useState } from "react";
import { Accordion, Button } from "flowbite-react";

type ProcessCollapse = {
  header: string;
  title: string;
  index?: number;
  barCondition: string;
  body: {
    header: string;
    headerCount: number;
    list: { body: string }[];
  };
};

const initialSteps: ProcessCollapse[] = [
  {
    header: "Risk 1",
    barCondition: "inherent",
    title:
      "Exposure to adverse weather and environmental conditions Malesuada sit nunc lacus habitant aliquet purus. Convallis ultrices libero facilisis penatibus sed orci id sit. Porttitor eleifend sed tellus viverra. Tortor vitae enim maecenas erat. Faucibus amet in id egestas lectus pretium id fames. Curabitur nam cursus ipsum in. Amet in id egestas lectus pretium id fames. Curabitur nam cursus ipsum in.",

    body: {
      header: "Causes & Hazards",
      headerCount: 3,
      list: [
        {
          body: "Malesuada sit nunc lacus habitant aliquet purus. Convallis ultrices libero facilisis penatibus sed orci id sit. Porttitor eleifend sed tellus viverra. Tortor vitae enim maecenas erat. Faucibus amet in id egestas lectus pretium id fames. Curabitur nam cursus ipsum in.",
        },
        {
          body: "Tempor fringilla scelerisque nunc at euismod malesuada consectetur. Tortor pulvinar ultricies consequat aliquam amet blandit lectus mattis gravida. Suspendisse phasellus fermentum metus tellus dignissim nunc quam mauris. Scelerisque eu imperdiet neque convallis maecenas massa. Amet cursus sit ac nisl blandit purus rutrum rutrum. Ultricies feugiat tincidunt id in posuere.",
        },
        {
          body: "Et consectetur consectetur viverra pellentesque ac dapibus dolor. Facilisis mattis quisque bibendum ultricies duis. A amet ante nunc hac porttitor. Accumsan odio tellus nibh tincidunt orci elementum et nunc viverra. Risus sed sed scelerisque dictum sagittis velit mi.",
        },
        {
          body: "Et consectetur consectetur viverra pellentesque ac dapibus dolor. Facilisis mattis quisque bibendum ultricies duis. A amet ante nunc hac porttitor. Accumsan odio tellus nibh tincidunt orci elementum et nunc viverra. Risus sed sed scelerisque dictum sagittis velit mi.",
        },
        {
          body: "Et consectetur consectetur viverra pellentesque ac dapibus dolor. Facilisis mattis quisque bibendum ultricies duis. A amet ante nunc hac porttitor. Accumsan odio tellus nibh tincidunt orci elementum et nunc viverra. Risus sed sed scelerisque dictum sagittis velit mi.",
        },
      ],
    },
  },
  {
    header: "Risk 2",
    barCondition: "inherent",
    title:
      "Potential harm or injury to students and staff during outdoor or indoor entertainment and sporting activities. Malesuada sit nunc lacus habitant aliquet purus. Convallis ultrices libero facilisis penatibus sed orci id sit. Porttitor eleifend sed tellus viverra. Tortor vitae enim maecenas erat. Faucibus amet in id egestas lectus pretium id fames. Curabitur nam cursus ipsum in. Porttitor eleifend sed tellus viverra. Tortor vitae enim maecenas erat. Faucibus amet in id egestas lectus pretium id fames. Curabitur nam cursus ipsum in",
    body: {
      header: "Effects & Consequences",
      headerCount: 4,
      list: [
        {
          body: "Malesuada sit nunc lacus habitant aliquet purus. Convallis ultrices libero facilisis penatibus sed orci id sit. Porttitor eleifend sed tellus viverra. Tortor vitae enim maecenas erat. Faucibus amet in id egestas lectus pretium id fames. Curabitur nam cursus ipsum in.",
        },
        {
          body: "Tempor fringilla scelerisque nunc at euismod malesuada consectetur. Tortor pulvinar ultricies consequat aliquam amet blandit lectus mattis gravida. Suspendisse phasellus fermentum metus tellus dignissim nunc quam mauris. Scelerisque eu imperdiet neque convallis maecenas massa. Amet cursus sit ac nisl blandit purus rutrum rutrum. Ultricies feugiat tincidunt id in posuere.",
        },
        {
          body: "Et consectetur consectetur viverra pellentesque ac dapibus dolor. Facilisis mattis quisque bibendum ultricies duis. A amet ante nunc hac porttitor. Accumsan odio tellus nibh tincidunt orci elementum et nunc viverra. Risus sed sed scelerisque dictum sagittis velit mi.",
        },
        {
          body: "Et consectetur consectetur viverra pellentesque ac dapibus dolor. Facilisis mattis quisque bibendum ultricies duis. A amet ante nunc hac porttitor. Accumsan odio tellus nibh tincidunt orci elementum et nunc viverra. Risus sed sed scelerisque dictum sagittis velit mi.",
        },
        {
          body: "Et consectetur consectetur viverra pellentesque ac dapibus dolor. Facilisis mattis quisque bibendum ultricies duis. A amet ante nunc hac porttitor. Accumsan odio tellus nibh tincidunt orci elementum et nunc viverra. Risus sed sed scelerisque dictum sagittis velit mi.",
        },
      ],
    },
  },
];

export const Step = (props: { currentStep: any }) => {
  const { currentStep } = props;
  const [valueStep, setValueStep] = useState<ProcessCollapse[]>(initialSteps);
  const [visibleItems, setVisibleItems] = useState<{ [key: number]: number }>(
    {}
  );

  const deleteRisk = (index: number, listIndex: number) => {
    const updatedSteps = valueStep.map((step, stepIndex) => {
      if (stepIndex === index) {
        return {
          ...step,
          body: {
            ...step.body,
            list: step.body.list.filter((_, i) => i !== listIndex),
          },
        };
      }
      return step;
    });
    setValueStep(updatedSteps);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const togglePanel = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showMoreItems = (index: number) => {
    setVisibleItems((prevVisibleItems) => ({
      ...prevVisibleItems,
      [index]: (prevVisibleItems[index] || 3) + 3,
    }));
  };

  return (
    <div>
      {currentStep == 1 && (
        <Accordion className="devide-0">
          {valueStep.map((item, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title
                onClick={() => togglePanel(index)}
                className={`${
                  openIndex === index
                    ? "items-start cursor-pointer border-primary-orange"
                    : "items-start"
                }`}
              >
                <div className="flex flex-row">
                  <div className="title-header w-[90%]">
                    <label
                      htmlFor=""
                      className="font-bold text-primary-black text-base	"
                    >
                      {item.header}
                    </label>
                    {""} - {""}
                    <span className="font-normal text-primary-black text-base	">
                      {item.title}
                    </span>
                  </div>
                  <div className="barometer flex flex-row items-start content-center	w-[15%]">
                    <a
                      href="#"
                      className="w-8 h-8 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_yellow_bar.svg" alt="" />
                      <span className="uppercase">{item.barCondition}</span>
                    </a>
                    <a
                      href="#"
                      className="w-6 h-6 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_delete.svg" alt="" />
                    </a>
                  </div>
                </div>
              </Accordion.Title>
              <Accordion.Content
                className={`${
                  openIndex === index ? "block border-primary-orange" : "hidden"
                }`}
              >
                <label
                  htmlFor=""
                  className="font-semibold	text-primary-black text-base"
                >
                  {item.body.header} <span>({item.body.headerCount})</span>
                </label>
                <div className="list-body">
                  {item.body.list.map((itemList, indexList) => (
                    <div className="p-4 flex" key={indexList}>
                      <span>{itemList.body}</span>
                      <a
                        href="#"
                        onClick={() => deleteRisk(index)}
                        className="w-[8%] flex items-center justify-end"
                      >
                        <img
                          src="/icon/ic_close.svg"
                          className="w-2.5 h-2.5"
                          alt=""
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      )}
      {currentStep == 2 && (
        <Accordion className="devide-0">
          {valueStep.map((item, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title
                onClick={() => togglePanel(index)}
                className={`${
                  openIndex === index
                    ? "items-start cursor-pointer border-primary-orange"
                    : "items-start"
                }`}
              >
                <div className="flex flex-row">
                  <div className="title-header w-[90%]">
                    <label
                      htmlFor=""
                      className="font-bold text-primary-black text-base	"
                    >
                      {item.header}
                    </label>
                    {""} - {""}
                    <span className="font-normal text-primary-black text-base	">
                      {item.title}
                    </span>
                  </div>
                  <div className="barometer flex flex-row items-start content-center	w-[15%]">
                    <a
                      href="#"
                      className="w-8 h-8 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_yellow_bar.svg" alt="" />
                      <span className="uppercase">{item.barCondition}</span>
                    </a>
                    <a
                      href="#"
                      className="w-6 h-6 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_delete.svg" alt="" />
                    </a>
                  </div>
                </div>
              </Accordion.Title>
              <Accordion.Content
                className={`${
                  openIndex === index ? "block border-primary-orange" : "hidden"
                }`}
              >
                <label
                  htmlFor=""
                  className="font-semibold	text-primary-black text-base"
                >
                  {item.body.header} <span>({item.body.headerCount})</span>
                </label>
                <div className="list-body">
                  {item.body.list.map((itemList, indexList) => (
                    <div className="p-4 flex" key={indexList}>
                      <span>{itemList.body}</span>
                      <a
                        href="#"
                        onClick={() => deleteRisk(index)}
                        className="w-[8%] flex items-center justify-end"
                      >
                        <img
                          src="/icon/ic_close.svg"
                          className="w-2.5 h-2.5"
                          alt=""
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      )}
      {currentStep == 3 && (
        <Accordion className="devide-0">
          {valueStep.map((item, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title
                onClick={() => togglePanel(index)}
                className={`${
                  openIndex === index
                    ? "items-start cursor-pointer border-primary-orange"
                    : "items-start"
                }`}
              >
                <div className="flex flex-row">
                  <div className="title-header w-[90%]">
                    <label
                      htmlFor=""
                      className="font-bold text-primary-black text-base	"
                    >
                      {item.header}
                    </label>
                    {""} - {""}
                    <span className="font-normal text-primary-black text-base	">
                      {item.title}
                    </span>
                  </div>
                  <div className="barometer flex flex-row items-start content-center	w-[15%]">
                    <a
                      href="#"
                      className="w-8 h-8 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_yellow_bar.svg" alt="" />
                      <span className="uppercase">{item.barCondition}</span>
                    </a>
                    <a
                      href="#"
                      className="w-6 h-6 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_delete.svg" alt="" />
                    </a>
                  </div>
                </div>
              </Accordion.Title>
              <Accordion.Content
                className={`${
                  openIndex === index ? "block border-primary-orange" : "hidden"
                }`}
              >
                <label
                  htmlFor=""
                  className="font-semibold	text-primary-black text-base"
                >
                  {item.body.header} <span>({item.body.headerCount})</span>
                </label>
                <div className="list-body">
                  {item.body.list.map((itemList, indexList) => (
                    <div className="p-4 flex" key={indexList}>
                      <span>{itemList.body}</span>
                      <a
                        href="#"
                        onClick={() => deleteRisk(index)}
                        className="w-[8%] flex items-center justify-end"
                      >
                        <img
                          src="/icon/ic_close.svg"
                          className="w-2.5 h-2.5"
                          alt=""
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      )}
      {currentStep == 4 && (
        <Accordion className="devide-0">
          {valueStep.map((item, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title
                onClick={() => togglePanel(index)}
                className={`${
                  openIndex === index
                    ? "items-start cursor-pointer border-primary-orange"
                    : "items-start"
                }`}
              >
                <div className="flex flex-row">
                  <div className="title-header w-[90%]">
                    <label
                      htmlFor=""
                      className="font-bold text-primary-black text-base	"
                    >
                      {item.header}
                    </label>
                    {""} - {""}
                    <span className="font-normal text-primary-black text-base	">
                      {item.title}
                    </span>
                  </div>
                  <div className="barometer flex flex-row items-start content-center	w-[50%]">
                    <a
                      href="#"
                      className="w-8 h-8 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_red_bar.svg" alt="" />
                      <span className="uppercase">{item.barCondition}</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_orange_bar.svg" alt="" />
                      <span className="uppercase">{item.barCondition}</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_yellow_bar.svg" alt="" />
                      <span className="uppercase">{item.barCondition}</span>
                    </a>
                    <a
                      href="#"
                      className="w-6 h-6 flex-1 flex flex-col items-center cursor-pointer"
                    >
                      <img src="/icon/ic_delete.svg" alt="" />
                    </a>
                  </div>
                </div>
              </Accordion.Title>
              <Accordion.Content
                className={`${
                  openIndex === index ? "block border-primary-orange" : "hidden"
                }`}
              >
                <label
                  htmlFor=""
                  className="font-semibold	text-primary-black text-base"
                >
                  {item.body.header} <span>({item.body.headerCount})</span>
                </label>
                <div className="list-body">
                  {item.body.list
                    .slice(0, visibleItems[index] || 3)
                    .map((itemList, listIndex) => (
                      <div className="p-4 flex" key={listIndex}>
                        <span>{itemList.body}</span>
                        <a
                          href="#"
                          onClick={() => deleteRisk(index, listIndex)}
                          className="w-[8%] flex items-center justify-end"
                        >
                          <img
                            src="/icon/ic_close.svg"
                            className="w-2.5 h-2.5"
                            alt=""
                          />
                        </a>
                      </div>
                    ))}
                  {item.body.list.length > (visibleItems[index] || 3) && (
                    <Button
                      onClick={() => showMoreItems(index)}
                      color="light"
                      className="border-b-2 rounded-none	border-r-0 border-l-0 border-t-0 border-primary-blue"
                    >
                      <span className="text-primary-black font-semibold text-sm">
                        Show More (
                        {item.body.list.length - (visibleItems[index] || 3)})
                      </span>
                    </Button>
                  )}
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      )}
    </div>
  );
};
