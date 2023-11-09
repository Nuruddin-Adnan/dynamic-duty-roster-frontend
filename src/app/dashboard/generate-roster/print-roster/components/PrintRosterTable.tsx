'use client'

import { useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';
import React from 'react';
import 'core-js/actual';
import * as _ from "lodash";


export default function PrintRosterTable() {
    const { rosterData } = useAppSelector((state: { roster: any }) => state.roster);

    const rourer = useRouter()

    if (!rosterData) {
        rourer.push('/dashboard/generate-roster')
        return <p>No Data Found</p>
    }

    const weekdays = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']


    const availableWeekDay = Object.keys(rosterData);

    const availableWorkstationDuplicate = Object.values(rosterData).map((item: any) => {
        return item.map((item: any) => item.workstation)
    })

    const availableWorkstation = _.uniq(_.flatten(availableWorkstationDuplicate))



    const saturday = rosterData['saturday'].group((saturday: any) => saturday?.workstation);
    const sunday = rosterData['sunday'].group((sunday: any) => sunday?.workstation);
    const monday = rosterData['monday'].group((monday: any) => monday?.workstation);
    const tuesday = rosterData['tuesday'].group((tuesday: any) => tuesday?.workstation);
    const wednesday = rosterData['wednesday'].group((wednesday: any) => wednesday?.workstation);
    const thursday = rosterData['thursday'].group((thursday: any) => thursday?.workstation);

    //Kep only employee array  for every  workstation eg. {histopathology: ['employee name']}
    const saturdayGroupByWorkstaion: any = {};
    const sundayGroupByWorkstaion: any = {};
    const mondayGroupByWorkstaion: any = {};
    const tuesdayGroupByWorkstaion: any = {};
    const wednesdayGroupByWorkstaion: any = {};
    const thursdayGroupByWorkstaion: any = {};

    for (const key in saturday) {
        saturdayGroupByWorkstaion[key] = saturday[key].map((item: any) => item?.employees);
    }

    for (const key in sunday) {
        sundayGroupByWorkstaion[key] = sunday[key].map((item: any) => item?.employees);
    }

    for (const key in monday) {
        mondayGroupByWorkstaion[key] = monday[key].map((item: any) => item?.employees);
    }

    for (const key in tuesday) {
        tuesdayGroupByWorkstaion[key] = tuesday[key].map((item: any) => item?.employees);
    }

    for (const key in wednesday) {
        wednesdayGroupByWorkstaion[key] = wednesday[key].map((item: any) => item?.employees);
    }

    for (const key in thursday) {
        thursdayGroupByWorkstaion[key] = thursday[key].map((item: any) => item?.employees);
    }


    return (

        <div className="px-6 py-4 bg-white">
            <table contentEditable={true} className='w-full font-serif'>
                <thead>
                    <tr>
                        <th className='px-2 py-3 text-left text-xs font-bold text-gray-500 print:text-black capitalize tracking-wider border border-black'>Day</th>
                        {
                            availableWorkstation.map((item: any, index: number) => <th className='px-2 py-3 text-left text-xs font-bold text-gray-500 print:text-black capitalize tracking-wider border border-black' key={index}>{item}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        availableWeekDay.includes('saturday') && <tr>
                            <th className="px-2 py-2 text-xs text-gray-900 print:text-black capitalize text-start border border-black">Saturday</th>
                            {
                                availableWorkstation.map((item: any, index: number) => <td key={index} className="px-2 py-[2px] text-sm text-gray-900 print:text-black capitalize border border-black">{saturdayGroupByWorkstaion[item] ? saturdayGroupByWorkstaion[item].join(', ') : " "}</td>)
                            }
                        </tr>
                    }

                    {
                        availableWeekDay.includes('sunday') && <tr>
                            <th className="px-2 py-2 text-xs text-gray-900 print:text-black capitalize text-start border border-black">Sunday</th>
                            {
                                availableWorkstation.map((item: any, index: number) => <td key={index} className="px-2 py-[2px] text-sm text-gray-900 print:text-black capitalize border border-black">{sundayGroupByWorkstaion[item] ? sundayGroupByWorkstaion[item].join(', ') : " "}</td>)
                            }
                        </tr>
                    }

                    {
                        availableWeekDay.includes('monday') && <tr>
                            <th className="px-2 py-2 text-xs text-gray-900 print:text-black capitalize text-start border border-black">Monday</th>
                            {
                                availableWorkstation.map((item: any, index: number) => <td key={index} className="px-2 py-[2px] text-sm text-gray-900 print:text-black capitalize border border-black">{mondayGroupByWorkstaion[item] ? mondayGroupByWorkstaion[item].join(', ') : " "}</td>)
                            }
                        </tr>
                    }

                    {
                        availableWeekDay.includes('tuesday') && <tr>
                            <th className="px-2 py-2 text-xs text-gray-900 print:text-black capitalize text-start border border-black">Tuesday</th>
                            {
                                availableWorkstation.map((item: any, index: number) => <td key={index} className="px-2 py-[2px] text-sm text-gray-900 print:text-black capitalize border border-black">{tuesdayGroupByWorkstaion[item] ? tuesdayGroupByWorkstaion[item].join(', ') : " "}</td>)
                            }
                        </tr>
                    }

                    {
                        availableWeekDay.includes('wednesday') && <tr>
                            <th className="px-2 py-2 text-xs text-gray-900 print:text-black capitalize text-start border border-black">Wednesday</th>
                            {
                                availableWorkstation.map((item: any, index: number) => <td key={index} className="px-2 py-[2px] text-sm text-gray-900 print:text-black capitalize border border-black">{wednesdayGroupByWorkstaion[item] ? wednesdayGroupByWorkstaion[item].join(', ') : " "}</td>)
                            }
                        </tr>
                    }

                    {
                        availableWeekDay.includes('thursday') && <tr>
                            <th className="px-2 py-2 text-xs text-gray-900 print:text-black capitalize text-start border border-black">Thursday</th>
                            {
                                availableWorkstation.map((item: any, index: number) => <td key={index} className="px-2 py-[2px] text-sm text-gray-900 print:text-black capitalize border border-black">{thursdayGroupByWorkstaion[item] ? thursdayGroupByWorkstaion[item].join(', ') : " "}</td>)
                            }
                        </tr>
                    }

                </tbody>
            </table>
        </div>

    )
}
