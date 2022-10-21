select "line1",
        "district",
        "name" as "city"
      from "addresses"
      join "cities" using ("cityId");
