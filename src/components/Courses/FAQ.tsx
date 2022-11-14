import React from "react";
import { Accordion } from "@mantine/core";
import Link from "next/link";

function FAQ() {
  return (
    <div className="pb-44">
      <div className="flex flex-col items-center justify-center gap-4 pt-24 pb-16">
        <h1 className="text-5xl font-bold flex gap-1 items-center">
          <span className="bg-[#C81107] text-white p-3">Frequently Asked</span>
          Questions
        </h1>
      </div>

      <Accordion variant="separated" defaultValue="customization">
        <Accordion.Item value="customization" className="border shadow-xl py-3">
          <Accordion.Control
          >
            What is the duration of the program?
          </Accordion.Control>
          <Accordion.Panel className="font-bold bg-neutral-100">
            It is a 6 - 12 months training program
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility" className="border shadow-xl py-3">
          <Accordion.Control>
            Who is eligible for the 1 year training program?
          </Accordion.Control>
          <Accordion.Panel className="font-bold bg-neutral-100">
            Only fresh Graduates and Corps members currently undergoing their
            National Youth Service Corps (NYSC) qualify for this opportunity.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring" className="border shadow-xl py-3">
          <Accordion.Control>
            Whom do I contact for further enquiries?
          </Accordion.Control>
          <Accordion.Panel className="font-bold bg-neutral-100">
            You can send a mail to{" "}
            <Link href="mailto:contactus@afexnigeria.com">
              <span className="text-[#C81107]">
                (contactus@afexnigeria.com)
              </span>
            </Link>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;
