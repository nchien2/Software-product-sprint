// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.Collection;
import java.util.Collections;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public final class FindMeetingQuery {
  private ArrayList<TimeRange> potentialTimes = new ArrayList<TimeRange>();
  
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    potentialTimes.add(TimeRange.WHOLE_DAY);
    if (request.getDuration() > 24 * 60){
        return Arrays.asList();
    }

    //Collections.sort(events, TimeRange.ORDER_BY_START);
    Set<String> requestAttendees = new HashSet<String>(request.getAttendees());

    for(Event event : events){
      HashSet<String> eventAttendees = new HashSet<String>();
      eventAttendees.addAll(event.getAttendees());
      eventAttendees.retainAll(requestAttendees);

      if(eventAttendees.size() > 0){
        int i = 0;
        while(i < potentialTimes.size()){
          if(potentialTimes.get(i).overlaps(event.getWhen())){
            updateTime(event.getWhen(), i, (int)request.getDuration());
          }
          i++;
        }
      }
    }
    return potentialTimes;
  }

  private void updateTime(TimeRange eventTime, int i, int duration){
    TimeRange potentialTime = potentialTimes.get(i);
    potentialTimes.remove(i);
    if(eventTime.start() < potentialTime.start()){
        if(eventTime.end() < potentialTime.end()){
            TimeRange newTime = TimeRange.fromStartEnd(eventTime.end(), potentialTime.end(), false);
            checkAdd(i, newTime, duration);
        }       
    }else{
      if(eventTime.end() < potentialTime.end()){
          TimeRange newTime1 = TimeRange.fromStartEnd(potentialTime.start(), eventTime.start(), false);
          TimeRange newTime2 = TimeRange.fromStartEnd(eventTime.end(), potentialTime.end(), false);
          checkAdd(i, newTime2, duration);
          checkAdd(i, newTime1, duration);
      }else{
          TimeRange newTime = TimeRange.fromStartEnd(potentialTime.start(), eventTime.start(), false);
          checkAdd(i, newTime, duration);
      }
    }
  }

  private void checkAdd(int i, TimeRange newTime, int duration){
      if(newTime.duration() >= duration){
        potentialTimes.add(i, newTime);
      }     
  }  
}


