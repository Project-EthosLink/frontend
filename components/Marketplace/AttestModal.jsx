import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '/components/ui/card';
import { Button } from '/components/ui/button';
import { Input } from "/components/ui/input"
import { AttestToken } from './Index';
import { useState } from 'react';

export default function TokenAttestModal(props) {

    const [message,setMessage] = useState("")

    return (
        <>{
            props.open && (
                <div id="defaultModal" class="flex items-center justify-center bg-black bg-opacity-25 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full">
                    <div class="relative max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <Card className="w-[300px]">
                                <CardHeader>
                                    <CardTitle>Token Attestation Feedback</CardTitle>
                                    <CardDescription>
                                        why are you attesting this token?
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="flex justify-between flex-col gap-4">
                                    <textarea type="text" placeholder="" value={message} onChange={(e) => setMessage(e.target.value)} className=' border-2 border-gray-400 w-full rounded'/>
                                    <Button onClick={() => AttestToken(message)}>Attest</Button>
                                    <Button variant="outline" onClick={() => props.setOpen(false)}>Close</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}