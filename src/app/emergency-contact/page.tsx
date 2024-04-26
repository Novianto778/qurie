import Banner from "@/components/ui/layout/banner";
import { LucideIcon, Phone } from "lucide-react";

type Props = {};

const Page = (props: Props) => {
  const contacts = [
    {
      title: "Ambulance",
      description:
        "Ambulans (118 atau 119) untuk Provinsi DKI Jakarta (021-65303118)",
      number: "118",
    },
    {
      title: "Fire Department",
      description: "Pemadam kebakaran = 113",
      number: "113",
    },
    {
      title: "Police",
      description: "Polisi = 110",
      number: "110",
    },
    {
      title: "Search and Rescue",
      description: "SAR/BASARNAS = 115",
      number: "115",
    },
    {
      title: "Disaster Post",
      description: "Posko bencana alam = 129",
      number: "129",
    },
    {
      title: "National Alert Post",
      description: "Posko Kewaspadaan Nasional = 122",
      number: "122",
    },
    {
      title: "Electricity Information and Repair",
      description:
        "Informasi dan perbaikan kerusakan dan gangguan listrik = 123",
      number: "123",
    },
    {
      title: "Covid-19 Hotline",
      description: "Hotline Covid-19 = 119",
      number: "119",
    },
    {
      title: "Indonesian Red Cross",
      description: "Palang Merah Indonesia atau PMI = (021) 7992325",
      number: "(021) 7992325",
    },
    {
      title: "BPOM Poison Information Center",
      description: "Sentra Informasi Keracunan BPOM (1500-533)",
      number: "1500-533",
    },
    {
      title: "Emergency Call",
      description: "Panggilan Darurat (112)",
      number: "112",
    },
  ];
  return (
    <div>
      <Banner
        bg="#E699A3"
        title="List of Emergency Contacts"
        image="/assets/images/feature2.png"
        subtitle="Access a list of emergency contacts for quick response during emergencies. Save these numbers to your phone and share them with your loved ones."
        textColor="#000"
      />
      <div className="container mt-8">
        <div className="grid grid-cols-12 gap-x-0 space-x-4 md:gap-x-8 gap-y-8">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.title}
              title={contact.title}
              description={contact.description}
              number={contact.number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

const ContactCard = ({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: string;
}) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 flex-1">
      <div className="flex gap-x-4">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow w-full min-h-48 flex flex-col">
          <div>
            <div>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                {title}
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500">{description}</p>
          </div>
          <a
            href={`tel:${number}`}
            className="flex items-center justify-center mt-auto w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg focus:outline-none focus:ring"
          >
            <Phone size={16} />
            <span className="ml-2">Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};
