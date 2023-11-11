import { rest } from "msw";

const baseUrl = `${process.env.REACT_APP_BASE_API_URL}`;

export const handlers = [
  // membuat API bohongan

  rest.post(`${baseUrl}/admin/auth/login`, async (req, res, ctx) => {
    const { email } = await req.json();

    if (email === "admin@bcr.io") {
      return res(
        ctx.status(201),
        ctx.json({
          email: "admin@bcr.io",
          role: "Admin",
          access_token: "dummy-token",
        })
      );
    }
    return res(
      ctx.status(400),
      ctx.json({ code: 400, message: "User Not Found" })
    );
  }),

  rest.get(`${baseUrl}/admin/v2/car`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        page: 1,
        pageSize: 10,
        pageCount: 100,
        count: 1000,
        cars: [
          {
            id: 1,
            name: "Toyota Avanza",
            category: "medium",
            price: 100000,
            status: false,
            start_rent_at: "2022-01-01",
            finish_rent_at: "2022-01-02",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Toyota_Avanza_1.3_G_F653RM_%2820200228%29.jpg",
            createdAt: "2023-11-11T14:22:11.091Z",
            updateAt: "2023-11-11T14:22:11.091Z",
          },
        ],
      })
    );
  }),
];
