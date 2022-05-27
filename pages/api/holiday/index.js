export default async function handler(req, res) {
    if (req.method === "POST") {
        const {
            name,
            email,
            phone,
            services,
            specialDemands,
            personNumber,
            coordonner,
            aboutHolliday,
        } = req.body;

        const customServices = services.map((s) => s.label);

        let html = "<ul>";

        html += `${customServices.map(
      (c) => `<li key=${Math.random()}>${c}</li>`
    )}`;

    html += "</ul>";

    return res.json({
      data: {
        name,
        email,
        phone,
        services: customServices,
        specialDemands,
        personNumber,
        coordonner,
        aboutHolliday,
      },
    });
  } else {
    return res.status(500).json({ message: "Only POST requests are allowed" });
  }
}