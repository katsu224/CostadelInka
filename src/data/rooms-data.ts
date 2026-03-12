export interface Room {
  id: string;
  title: string;
  shortTitle: string;
  size: string;
  beds: string;
  description: string;
  gallery: string[];
  highlights: string[];
  bathroomAmenities: string[];
  services: string[];
  hasAC: boolean;
  hasMinibar: boolean;
  hasCityView: boolean;
  maxGuests: number;
  priceFrom: number;
  category: "solo" | "pareja" | "familiar";
  faqs: { question: string; answer: string }[];
}

export const WHATSAPP_NUMBER = "51920585300";
export const BOOKING_URL = "https://www.booking.com/hotel/pe/costa-del-inka.es.html";

export function getWhatsAppLink(roomTitle: string): string {
  const message = encodeURIComponent(
    `Hola, deseo reservar la ${roomTitle} del Hotel Costa del Inka.\n\nSomos [  ] Adultos y [  ] Niños.\n\n¿Me podrían confirmar disponibilidad y la información sobre el desayuno?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export const rooms: Room[] = [
  {
    id: "habitacion-individual",
    title: "Habitación Individual",
    shortTitle: "Individual",
    size: "Habitación acogedora",
    beds: "1 cama individual",
    description:
      "Nuestra habitación individual es ideal para viajeros que buscan comodidad y privacidad. Ofrece todo lo necesario para una estadía placentera, incluyendo servicio a la habitación, lavandería y equipo de música.",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    ],
    highlights: ["Habitación acogedora", "1 cama individual", "Baño privado", "Wi-Fi gratis", "Ventilador"],
    bathroomAmenities: ["Artículos de aseo gratis", "Bañera o ducha", "Toallas", "Papel higiénico"],
    services: ["TV de pantalla plana", "Canales por cable", "Servicio a habitación", "Lavandería", "Equipo de música", "Armario", "Perchero"],
    hasAC: false,
    hasMinibar: false,
    hasCityView: false,
    maxGuests: 1,
    priceFrom: 128,
    category: "solo",
    faqs: [
      {
        question: "¿Es adecuada para estancias de trabajo?",
        answer: "Sí, incluye escritorio y WiFi gratis de alta velocidad, ideal para viajeros de negocios."
      },
      {
        question: "¿El baño es privado?",
        answer: "Sí, todas nuestras habitaciones tienen baño privado con agua caliente las 24 horas."
      },
      {
        question: "¿Incluye desayuno?",
        answer: "El desayuno no está incluido en esta habitación. Puede agregarlo consultando por WhatsApp antes de su llegada."
      }
    ],
  },
  {
    id: "habitacion-doble",
    title: "Habitación Doble",
    shortTitle: "Doble",
    size: "Habitación acogedora",
    beds: "1 cama doble grande",
    description:
      "Un espacio cómodo y acogedor con una cama doble grande, perfecto para parejas o viajeros que prefieren más amplitud. Disfrute de nuestro servicio a la habitación, lavandería y equipo de música para su total confort.",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop",
    ],
    highlights: ["Habitación acogedora", "1 cama doble grande", "Baño privado", "Wi-Fi gratis", "Ventilador"],
    bathroomAmenities: ["Artículos de aseo gratis", "Bañera o ducha", "Toallas", "Papel higiénico"],
    services: ["TV de pantalla plana", "Canales por cable", "Servicio a habitación", "Lavandería", "Equipo de música", "Armario", "Perchero"],
    hasAC: false,
    hasMinibar: false,
    hasCityView: false,
    maxGuests: 2,
    priceFrom: 148,
    category: "pareja",
    faqs: [
      {
        question: "¿Es apta para parejas?",
        answer: "Sí, cuenta con una cama doble grande y ambiente tranquilo ideal para parejas."
      },
      {
        question: "¿Incluye desayuno?",
        answer: "No está incluido en esta habitación. Puede agregarlo consultando por WhatsApp."
      },
      {
        question: "¿Tiene frigobar?",
        answer: "Sí, todas nuestras habitaciones incluyen frigobar."
      }
    ],
  },
  {
    id: "habitacion-doble-superior",
    title: "Habitación Doble Superior - 2 camas dobles",
    shortTitle: "Doble Superior",
    size: "Habitación amplia",
    beds: "2 camas dobles",
    description:
      "Nuestra habitación doble superior ofrece mayor comodidad con dos camas dobles, ideal para familias pequeñas o amigos que viajan juntos. Brindamos servicio a la habitación, lavandería y un equipo de música para ambientar su estancia.",
    gallery: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
    ],
    highlights: ["Habitación amplia", "2 camas dobles", "Baño privado", "Wi-Fi gratis", "A/C (Consultar disp.)"],
    bathroomAmenities: ["Artículos de aseo gratis", "Bañera o ducha", "Toallas", "Papel higiénico"],
    services: ["TV de pantalla plana", "Canales por cable", "Servicio a habitación", "Lavandería", "Equipo de música", "Armario", "Perchero"],
    hasAC: false,
    hasMinibar: false,
    hasCityView: false,
    maxGuests: 4,
    priceFrom: 228,
    category: "familiar",
    faqs: [
      {
        question: "¿Es buena para familia con niños?",
        answer: "Perfecta. Las dos camas dobles dan espacio cómodo para padres e hijos pequeños."
      },
      {
        question: "¿El desayuno incluye a los niños?",
        answer: "El desayuno está contemplado para adultos. Para niños consulte condiciones por WhatsApp antes de reservar para evitar sorpresas al llegar."
      },
      {
        question: "¿Tienen servicio a la habitación?",
        answer: "Sí, disponible durante horarios de atención. Consulte horarios en recepción al hacer check-in."
      }
    ],
  },
  {
    id: "habitacion-estandar-extragrande",
    title: "Habitación Estándar - Cama extragrande",
    shortTitle: "Estándar Extragrande",
    size: "Habitación espaciosa",
    beds: "1 cama doble extragrande",
    description:
      "Amplia habitación con una cama doble extragrande para el máximo descanso. Equipada con TV de pantalla plana, frigobar y baño privado. También disfrutará de servicio a la habitación, lavandería y equipo de música.",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    ],
    highlights: [
      "Habitación espaciosa",
      "1 cama doble extragrande",
      "Vistas (Consultar disp.)",
      "A/C (Consultar disp.)",
      "Frigobar",
      "Wi-Fi gratis",
    ],
    bathroomAmenities: ["Artículos de aseo gratis", "Bañera o ducha", "Toallas", "Papel higiénico"],
    services: [
      "TV de pantalla plana",
      "Camas extralargas (más de 2 metros)",
      "Frigobar",
      "Servicio a habitación",
      "Lavandería",
      "Equipo de música",
      "Canales por cable",
      "Armario",
      "Perchero",
    ],
    hasAC: false,
    hasMinibar: true,
    hasCityView: false,
    maxGuests: 2,
    priceFrom: 198,
    category: "pareja",
    faqs: [
      {
        question: "¿Tiene aire acondicionado?",
        answer: "Sí, esta habitación cuenta con aire acondicionado. Si viaja en temporada de calor (diciembre-marzo) esta es su mejor opción."
      },
      {
        question: "¿Las vistas a la ciudad son reales?",
        answer: "Sí, esta habitación tiene vista hacia la ciudad desde su ventana."
      },
      {
        question: "¿El minibar está incluido en el precio?",
        answer: "El frigobar está disponible en la habitación. Los consumos se cobran aparte al momento del check-out."
      }
    ],
  },
  {
    id: "habitacion-superior-extragrande",
    title: "Habitación Superior con cama extragrande",
    shortTitle: "Superior Extragrande",
    size: "Habitación muy espaciosa",
    beds: "1 cama doble extragrande",
    description:
      "Un espacio generoso con una cama doble extragrande, ideal para quienes buscan confort superior. Incluye artículos de aseo gratuitos, baño privado con ducha, frigobar, servicio a la habitación, lavandería y equipo de música.",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    ],
    highlights: [
      "Habitación muy espaciosa",
      "1 cama doble extragrande",
      "Vistas (Consultar disp.)",
      "A/C (Consultar disp.)",
      "Frigobar",
      "Wi-Fi gratis",
    ],
    bathroomAmenities: ["Artículos de aseo gratis", "Bañera o ducha", "Toallas", "Papel higiénico"],
    services: [
      "TV de pantalla plana",
      "Camas extralargas (más de 2 metros)",
      "Frigobar",
      "Servicio a habitación",
      "Lavandería",
      "Equipo de música",
      "Canales por cable",
      "Armario",
      "Perchero",
    ],
    hasAC: false,
    hasMinibar: true,
    hasCityView: false,
    maxGuests: 2,
    priceFrom: 248,
    category: "pareja",
    faqs: [
      {
        question: "¿Qué la diferencia de la Estándar?",
        answer: "Mayor espacio, acabados superiores y mejor vista. Es nuestra habitación más elegante para quienes buscan confort premium sin llegar a suite."
      },
      {
        question: "¿Incluye desayuno?",
        answer: "Consulte disponibilidad de paquetes con desayuno incluido escribiéndonos por WhatsApp."
      },
      {
        question: "¿Tiene aire acondicionado?",
        answer: "Sí, incluye aire acondicionado."
      }
    ],
  },
  {
    id: "habitacion-triple",
    title: "Habitación Triple con vistas a la ciudad",
    shortTitle: "Triple",
    size: "Habitación amplia",
    beds: "3 camas individuales",
    description:
      "Habitación triple ideal para familias o grupos de amigos, con vistas a la ciudad desde el piso superior. Ofrece 3 camas cómodas, servicio a la habitación, lavandería, equipo de música, TV de pantalla plana y baño privado con ducha.",
    gallery: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    ],
    highlights: [
      "Habitación amplia",
      "3 camas individuales",
      "Vistas a la ciudad",
      "Baño privado",
      "TV pantalla plana",
      "Wi-Fi gratis",
    ],
    bathroomAmenities: ["Artículos de aseo gratis", "Bañera o ducha", "Toallas", "Papel higiénico"],
    services: ["TV de pantalla plana", "Canales por cable", "Servicio a habitación", "Lavandería", "Equipo de música", "Armario", "Perchero"],
    hasAC: false,
    hasMinibar: false,
    hasCityView: true,
    maxGuests: 3,
    priceFrom: 268,
    category: "familiar",
    faqs: [
      {
        question: "¿Es apta para familia con niño pequeño?",
        answer: "Sí, es nuestra opción más popular para familias. Recuerde que el desayuno está incluido solo para adultos — los niños tienen costo adicional. Consúltenos antes de reservar."
      },
      {
        question: "¿Las 3 camas son del mismo tamaño?",
        answer: "Son 3 camas individuales cómodas. Si necesita configuración especial consúltenos por WhatsApp."
      },
      {
        question: "¿Tiene buena vista?",
        answer: "Sí, es una de las habitaciones con mejor panorámica de la ciudad de Nuevo Chimbote."
      }
    ],
  },
  {
    id: "habitacion-cuadruple",
    title: "Habitación Cuádruple",
    shortTitle: "Cuádruple",
    size: "Habitación familiar",
    beds: "4 camas individuales",
    description:
      "Nuestra habitación más espaciosa, ideal para familias o grupos grandes. Con 4 camas cómodas, garantiza una estadía confortable para todos. Incluye servicio a la habitación, lavandería, equipo de música y TV de pantalla plana con canales por cable.",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop",
    ],
    highlights: [
      "Habitación familiar",
      "4 camas individuales",
      "Vistas (Consultar disp.)",
      "Baño privado",
      "Wi-Fi gratis",
    ],
    bathroomAmenities: ["Artículos de aseo gratis", "Bañera o ducha", "Toallas", "Papel higiénico"],
    services: ["TV de pantalla plana", "Canales por cable", "Servicio a habitación", "Lavandería", "Equipo de música", "Armario", "Perchero"],
    hasAC: false,
    hasMinibar: false,
    hasCityView: false,
    maxGuests: 4,
    priceFrom: 308,
    category: "familiar",
    faqs: [
      {
        question: "¿Es la mejor opción para grupos?",
        answer: "Sí, es nuestra habitación más espaciosa. Ideal para familias grandes o grupos de amigos."
      },
      {
        question: "¿El desayuno incluye a todos los huéspedes?",
        answer: "Consulte condiciones de desayuno para grupos por WhatsApp antes de reservar — así evitamos sorpresas al llegar."
      },
      {
        question: "¿Tienen estacionamiento para cuando viajan varios?",
        answer: "Contamos con estacionamiento con disponibilidad limitada. Si viajan en más de un vehículo escríbanos para coordinar con anticipación."
      }
    ],
  },
];
export function getRoomById(id: string): Room | undefined {
  return rooms.find((r) => r.id === id);
}

export function getOtherRooms(currentId: string): Room[] {
  return rooms.filter((r) => r.id !== currentId);
}
