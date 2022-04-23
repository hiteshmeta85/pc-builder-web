import {useEffect, useState} from "react";
import Loading from "../components/Loading";
import httpClient from "../utilities/httpClient";
import {Box, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import Error from "../components/Error";

const PreviousQueries = ({isLoggedIn, setIsLoggedIn}) => {
    const [prevQueries, setPrevQueries] = useState([])
    const [didWeGetTheInfo, setDidWeGetTheInfo] = useState('loading');

    useEffect(() => {
        const getQuery = async () => {
            try {
                const res = await httpClient({
                    method: 'GET',
                    url: `${process.env.REACT_APP_API_HOST}/user/query`
                })
                console.log(res)
                if (res.data.data.length !== 0) {
                    setPrevQueries(res.data.data)
                    setDidWeGetTheInfo('true')
                } else {
                    setDidWeGetTheInfo('null')
                }
            } catch (err) {
                setDidWeGetTheInfo('false')
            }
        }
        getQuery()
    }, [])

    const IndividualQuery = () => {
        return (
            <TableContainer my={4}>
                <Table size='md' colorScheme='purple'>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Title</Th>
                            <Th>Query</Th>
                            <Th>Response</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {prevQueries.map((query) => {
                            return (
                                <QueryList key={query.id} list={query}/>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }

    const QueryList = (props) => {
        const {id, title, description, status, reply} = props.list
        return (
            <Tr>
                <Td>{id}</Td>
                <Td>{title}</Td>
                <Td>{description}</Td>
                {status ? <Td>{reply}4</Td> : <Td>Awaiting Response...</Td>}
            </Tr>
        )
    }

    const conditionalRendering = () => {
        if (didWeGetTheInfo === 'loading') {
            return <Loading/>
        }
        if (didWeGetTheInfo === 'true') {
            return (
                <>
                    <IndividualQuery/>
                </>
            )
        }
        if (didWeGetTheInfo === 'null') {
            return (
                <>
                    <Text fontSize='1.5rem' color='gray.500'>
                        No queries asked yet.
                    </Text>
                </>
            )
        }
        if (didWeGetTheInfo === 'false') {
            return (
                <Error/>
            )
        }
    }

    return (
        <Box maxW='1360px' mx='auto' px={{base: '1rem', md: '2rem'}} py={{base: 4, md: 16}}
             fontSize={{lg: '1rem'}}>
            <Heading fontWeight='semibold' color='purple.500'>Previous Queries</Heading>
            {conditionalRendering()}
        </Box>
    )
}

export default PreviousQueries