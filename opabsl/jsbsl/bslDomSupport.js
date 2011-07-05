/*
    Copyright © 2011 MLstate

    This file is part of OPA.

    OPA is free software: you can redistribute it and/or modify it under the
    terms of the GNU Affero General Public License, version 3, as published by
    the Free Software Foundation.

    OPA is distributed in the hope that it will be useful, but WITHOUT ANY
    WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for
    more details.

    You should have received a copy of the GNU Affero General Public License
    along with OPA.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
  * Fill this file with function to check fonctionnality browser support
  */

##register support_placeholder : -> bool
##args()
{
    return document.createElement('input').placeholder !== undefined
}

##register support_notification: -> bool
##args()
{
    if(window.webkitNotifications)
      return true;
    else return false;
}
