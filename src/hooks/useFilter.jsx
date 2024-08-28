import { useEffect, useState } from "react";

export const useFilter = ({ data = [], search }) => {
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const filterData = () => {
            return data?.filter((item) => {
                return (Object.values(item).some(value => value?.toString()?.toLowerCase()?.includes(search?.toLowerCase() || '')));
            });
        };

        setFilteredData(filterData());
    }, [data, search]);

    return { Data: filteredData };
};