import React, { FC, useEffect, useState } from "react";
import PageContainer from "../../components/page-container/PageContainer";
import Box from "../../components/box/Box";
import { LogSeed, fetchSeeds, hashMessage } from "./logbook-service";
import drawSplat from '../../services/splatter/splatter';
import './Logbook.css';

const Logbook = () => {
    const [message, setMessage] = useState('');
    const [seeds, setSeeds] = useState<LogSeed[]>([]);

    useEffect(() => {
        fetchSeeds()
          .then(seeds => setSeeds(seeds))
          .catch(error => console.log(error))
    }, [])

    const sendMessage = () => {

    }

    return <PageContainer>
        <Box label="Logbook">
            <div className="px-8 py-4">
                <h1 className="text-3xl mb-2">Leave Your Mark</h1>
                <p className="mb-3">
                    Write whatever you'd like. Your message here will be imediately encrypted and be the seed for a randomized mark left on this page.
                    No one but you will know what you wrote, but anyone who visits will see the mark you left here.
                </p>
                <p className="mb-3">
                    Your can write your name, a nice message, a mean message, a love poem, or random letters; the algorithm is indifferent.
                    One day, you will forget what you wrote here, even if it was your own name, but the mark you've left behind will remain.
                </p>
                <textarea className="text-black text-2xl w-full p-1" rows={1} value={message} onChange={event => setMessage(event.target.value)} placeholder="Write a message"/>
                <div className="w-full flex justify-end bg-black">
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
    useEffect(() => {
        drawSplat(seed.id, seed.seed)
    }, [])

    return <div className="mark-box w-[128px] h-[128px]">
        <canvas id={seed.id} height={32} width={32} className="absolute bg-black w-[128px] h-[128px] z-0" style={{imageRendering: 'pixelated'}}/>
        <div className="mark-date flex absolute w-[128px] h-[128px] z-10 items-center justify-center bg-black bg-opacity-50">
            {seed.timesent.toDate().toLocaleDateString()}
        </div>
    </div>
}

export default Logbook;
