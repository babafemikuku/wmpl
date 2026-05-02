"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TaglineBanner } from "../global/TaglineBanner";
import { FadeUp } from "../global/animations";

const companySizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companySize: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // handle submission
  }

  return (
    <section className="relative min-h-[640px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cloud-pattern.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-95"
      />

      <div className="container relative z-10 grid min-h-[640px] grid-cols-1 items-start gap-16 py-20 lg:grid-cols-2">
        <FadeUp>
          <h2 className="font-bold leading-[1.1] tracking-[-0.03em] text-4xl md:text-5xl text-[#5E35B1]">
            Let's have a direct conversation.
          </h2>
          <p className="mt-5 max-w-[38ch] text-base leading-[1.8] text-near-black/70">
            Fill in the form below and we'll be in touch to arrange a call at a
            time that works for both of us.
          </p>
        </FadeUp>

        <FadeUp>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-lg border border-[#5E35B1] bg-white p-8"
          >
            <div>
              <Label htmlFor="fullName" className="mb-6">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="JaneDoe@email.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="xyz Brand"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="companySize" className="mb-2">
                Company Size
              </Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, companySize: value }))
                }
              >
                <SelectTrigger id="companySize">
                  <SelectValue placeholder="Select Company Size" />
                </SelectTrigger>
                <SelectContent>
                  {companySizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">What's driving this conversation?</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="resize-none mt-2"
              />
            </div>

            <Button
              type="submit"
              className="px-7 text-white bg-[#7B4FD4] rounded-lg"
            >
              Get in Touch
            </Button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
