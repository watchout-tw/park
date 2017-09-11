export function pollStatus(poll) {
  let now = Date.now()
  let status = poll.status.toUpperCase()
  if(now >= poll.end_date.getTime()) {
    status = 'closed'
  }
  return status
}
const pollStatusMap = {
  closed: '結束'
}
export function pollStatusText(status) {
  return pollStatusMap[status] ? pollStatusMap[status] : status
}
