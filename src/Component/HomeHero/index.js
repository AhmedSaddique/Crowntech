import React from "react";
import Button from "../Button";
import Container from "../Container";
import { HeadingH1 } from "../Heading";
import { Para16 } from "../ParaGraph";

const Hero = ({ heading, title, btn1, btn2 }) => {
  return (
    <>
      {heading || title || btn1 || btn2 ? (
        <div>
          <Container>
            <div className={`p-2 lg:p-28 `}>
              <div className="space-y-4 p-25 text-center ">
                {heading && <HeadingH1 title={heading} />}
                {title && (
                  <Para16
                    className=""
                    title={title}
                  />
                )}
                <div className="flex flex-wrap justify-center gap-4 ">
                  {btn1 && (
                    <Button
                      text={btn1}
                      className="border-none px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
                    />
                  )}
                  {btn2 && (
                    <Button
                      text={btn2}
                      className="bg-primary-white px-4 py-2 shadow border-none text-black"
                    />
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
};

export default Hero;
