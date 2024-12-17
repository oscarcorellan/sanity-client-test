import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

import { practices } from "@/consts";

export async function POST() {
  const transaction = client.transaction();

  practices.forEach((practice) => {
    transaction.createOrReplace({
      _type: "practices",
      _id: practice.id.toString(),
      id: practice.id,
      name: practice.name,
      doctorId: practice.doctorId,
      active: practice.active,
      partner: practice.partner,
      provider: practice.provider,
      providerPlus: practice.providerPlus,
      email: practice.email,
      website: practice.website,
      appointmentLink: practice.appointmentLink,
      phone: practice.phone,
      address: practice.address,
      streetNumber: practice.streetNumber,
      suiteNumber: practice.suiteNumber,
      route: practice.route,
      city: practice.city,
      county: practice.county,
      state: practice.state,
      stateShort: practice.stateShort,
      zip: practice.zip,
      country: practice.country,
      countryShort: practice.countryShort,
      latitude: practice.latitude,
      longitude: practice.longitude,
      openingHours: practice.openingHours,
      socialMedia: practice.socialMedia,
      createdAt: practice.createdAt,
      updatedAt: practice.updatedAt,
      image: practice.image,
      gallery: practice.gallery,
      products: practice.products,
      productsFromOrder: practice.productsFromOrder,
      practiceDiscount: practice.practiceDiscount,
      practiceLogo: practice.practiceLogo,
      practiceQrCode: practice.practiceQrCode,
      refersionLink: practice.refersionLink,
      productPads: practice.productPads,
      displayType: practice.displayType,
      practiceDiscount20: practice.practiceDiscount20,
    });
  });

  await transaction.commit();

  return NextResponse.json(
    { message: "Practices data migrated successfully" },
    { status: 200 }
  );
}
