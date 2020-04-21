import { Button, Flex, Grid, Icon, Link, Box } from "@chakra-ui/core"
import React, { useState } from "react"
import SearchForm from "../Components/SearchForm"
import DataContainer from "../Components/DataContainer"
import fetchWikipediaData, { WikipediaResponse } from "./fetchWikipediaData"

interface Props {}

const Home = (props: Props) => {
  const [searching, setSearching] = useState(false)
  const [response, setResponse] = useState<WikipediaResponse | null>(null)
  const [showNotFound, setShowNotFound] = useState("")
  function onSearchInputValue(searchText: string) {
    setShowNotFound("")
    fetchWikipediaData(searchText)
      .then((data) => {
        setResponse(data)
        if (data?.query.search.length === 0) {
          setShowNotFound("Uppss! No Results Found. Please try again.")
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <React.Fragment>
      <Box maxW="800px" margin="auto">
        <Flex
          align="center"
          margin="auto"
          justifyContent="center"
          minHeight="25vh"
          mb="0"
          pb="0"
        >
          <Grid>
            <Grid column="1" mb="10" justifyContent="center">
              <Link
                href="https://en.wikipedia.org/wiki/Special:Random"
                target="_blank"
                rel="noopener noreferrer"
                // fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                color="blue.500"
              >
                Click Here for a random Search
              </Link>
            </Grid>

            {searching ? (
              <SearchForm
                getValue={onSearchInputValue}
                close={() => {
                  setSearching(false)
                }}
              />
            ) : (
              <>
                <Grid column="1" justifyContent="center">
                  <Button
                    onClick={() => {
                      setSearching(true)
                    }}
                    width="200px"
                    height="50px"
                    display="flex"
                    variantColor="teal"
                    variant="unstyled"
                    aria-label="Search"
                  >
                    <Icon name="search" color="red.500" size="10" />
                  </Button>
                </Grid>
                <Grid justifyContent="center">
                  <Button
                    variant="unstyled"
                    onClick={() => {
                      setSearching(true)
                    }}
                    color="blue.500"
                  >
                    Click the icon to search
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Flex>

        {showNotFound && (
          <Grid justifyContent="center">
            <h3>{showNotFound}</h3>
          </Grid>
        )}
        {response && (
          <Grid>
            <DataContainer data={response} />
          </Grid>
        )}
      </Box>
    </React.Fragment>
  )
}

export default Home
