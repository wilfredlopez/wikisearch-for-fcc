import React from "react"
import { Box, Heading, Stack, Text, Link } from "@chakra-ui/core"
import { WikipediaResponse, PageItem } from "../pages/fetchWikipediaData"

interface FeatureProps {
  item: PageItem
}

// request a weekday along with a long date
var DateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
  timeZoneName: "short",
}

// an application may want to use UTC and make that visible

function Feature({ item, ...rest }: FeatureProps) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Link
        href={`https://en.wikipedia.org/?curid=${item.pageid}`}
        target="_blank"
        rel="noopener noreferrer"
        textDecoration="none"
      >
        <Heading fontSize="xl">{item.title}</Heading>
        {item.snippet && (
          <div
            dangerouslySetInnerHTML={{
              __html: item.snippet,
            }}
          ></div>
        )}
      </Link>
      <Text mt={4}>
        <i>
          {Intl.DateTimeFormat("en-US", DateOptions).format(
            new Date(item.timestamp),
          )}
        </i>
      </Text>
    </Box>
  )
}

interface Props {
  data: WikipediaResponse
}
function DataContainer(props: Props) {
  const [data, setData] = React.useState<PageItem[]>([])

  React.useLayoutEffect(() => {
    const getDataReady = () => {
      const tempData: PageItem[] = []
      const pages = props.data.query.search
      for (const key in pages) {
        tempData.push(pages[key])
      }
      setData(tempData)
    }
    getDataReady()
  }, [props.data])

  return (
    <Stack spacing={8}>
      {data.map((i) => {
        return <Feature item={i} key={i.pageid} />
      })}
      <br />
    </Stack>
  )
}

export default DataContainer
