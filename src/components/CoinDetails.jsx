import { Container, Box } from "@chakra-ui/react";
import React from "react";
import Loader from "./Loader";

const CoinDetails = () => {

  onst [coins, setCoins] = useState({});

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [currency, setCurrency] = useState("inr");

  return <Container maxW={"container.xl"}>
    {
      loading?<Loader />:(
        <>
          <Box width={"full"} borderWidth={1}>

          </Box>
        </>
      )
    }
  </Container>
};

export default CoinDetails;
