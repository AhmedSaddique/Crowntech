    "use client";
    import React, {  useCallback } from "react";
    import Image from "next/image";
    import { useRouter } from "next/navigation";
    import { UseidContext } from "../ServiceContext";
    import { HeadingH4, HeadingH6 } from "../Heading";
    import { Para12 } from "../ParaGraph";

    const MegaData = ({services }) => {
      const { id, setid } = UseidContext();
      const router = useRouter();
      
    const handleServiceClick = useCallback((service) => {
      setid(service.id);
      const serviceNameSlug = service.serviceName.toLowerCase().replace(/ /g, '-'); // replace spaces with hyphens
      router.push(`/service/${serviceNameSlug}`);
    }, [router, setid]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Truncate text and add ellipsis
    }
    return text;
  };

      return (
        <>
          <div className="flex items-center p-3 ">
            <HeadingH4 title={"Core Services"} />
          </div>
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className="flex flex-colh-full w-full  sm:flex-row border md:border-none mt-2 md:mt-0 mb-3 md:mb-0 duration-300 transition gap-3 rounded-md hover:bg-primary-blue100 hover:text-white px-2 py-2 cursor-pointer"
            >
              <Image
                className="w-[30px] h-[30px] object-cover bg-center rounded-full"
                width={200}
                height={200}
                src={`/${service.serviceImage.replace("public/", "")}`}
                alt={`/${service.serviceImage.replace("public/", "")}`}
                loading="lazy"
              />
              <div>
                <HeadingH6  title={service.serviceName} />
                <Para12
                  title={truncateText(service.serviceText, 80)}
                />
              </div>
            </div>
          ))}
    
        </>
      );
    };

    export default MegaData;
