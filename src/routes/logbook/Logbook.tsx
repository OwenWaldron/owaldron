import React, { FC, useEffect, useState } from "react";
import PageContainer from "../../components/page-container/PageContainer";
import Box from "../../components/box/Box";
import { LogSeed, fetchSeeds } from "./logbook-service";

const Logbook = () => {
    const [message, setMessage] = useState('');
    const [seeds, setSeeds] = useState<LogSeed[]>([]);

    useEffect(() => {
        fetchSeeds()
          .then(seeds => setSeeds(seeds))
          .catch(error => console.log(error))
    }, [])

    return <PageContainer>
        <Box label="Logbook">
            <div className="px-8 py-4">
                <h1 className="text-3xl">Leave Your Mark</h1>
                <p>
                    Write whatever you'd like. Your message here will be imediately encrypted and be the seed for a mark left on this page.
                    No one but you will know what you wrote, but everyone will see the mark you left here.
                </p>
                <textarea className="text-black text-2xl" rows={1} value={message} onChange={event => setMessage(event.target.value)}/>
                <div>
                    {seeds.map(seed => <Mark seed={seed} /> )}
                </div>
            </div>
        </Box>
    </PageContainer>
}

type MarkProps = {
    seed: LogSeed;
}

const Mark: FC<MarkProps> = ({seed}) => {
    return <h2>{seed.seed}</h2>
}

export default Logbook;
